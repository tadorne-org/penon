/* Re-tint socle's <scad-viewer> with the Tadorne tokens.
 *
 * socle paints its palette on an inner `.root` element inside the shadow
 * root, not on `:host` — so an outer stylesheet cannot override it (the
 * `.root` declaration beats inheritance from the host). And socle installs
 * its sheet with `adoptedStyleSheets`, which beats any <style> appended to
 * the shadow root. So the re-tint adds a constructed sheet *after* socle's,
 * where source order decides at equal specificity.
 *
 * This reaches into socle's internals (the `.root` selector and the
 * unprefixed variable names). If socle ever renames them, this silently
 * stops working: the viewer keeps socle's own lime palette, nothing breaks.
 * Cost of failure is cosmetic, which is why the trick is acceptable here.
 */

const TINT = `
.root {
  --bg: var(--td-bg);
  --panel: var(--td-bg-raised);
  --border: var(--td-border);
  --hair: var(--td-border);
  --text: var(--td-fg);
  --text-dim: var(--td-fg-muted);
  --text-faint: var(--td-sand);
  --accent: var(--td-brand);
  --accent-dim: rgb(231 147 75 / 35%);
  --danger: var(--td-vermilion-deep);
}

/* On crème, the pressed tool buttons set --bg text on --accent: orange would
   land near 2:1. vermilion-deep keeps it at the brand's 5.9:1. */
.root[data-theme='light'] {
  --accent: var(--td-vermilion-deep);
  --accent-dim: rgb(178 58 18 / 35%);
}
`;

function tint(el) {
  const root = el.shadowRoot;
  if (!root || root.querySelector('style[data-penon-tint]') || el.__penonTint) return;
  el.__penonTint = true;

  // Preferred path: socle uses adoptedStyleSheets, so add ours after theirs.
  if (typeof CSSStyleSheet === 'function' && root.adoptedStyleSheets) {
    try {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(TINT);
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
      return;
    } catch (err) {
      /* fall through to the <style> path */
    }
  }

  // Fallback for browsers where socle itself fell back to a <style> element.
  const style = document.createElement('style');
  style.setAttribute('data-penon-tint', '');
  style.textContent = TINT;
  root.append(style);
}

function tintAll() {
  document.querySelectorAll('scad-viewer').forEach(tint);
}

if (window.customElements) {
  customElements.whenDefined('scad-viewer').then(tintAll);
}
