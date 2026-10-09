# penon.tadorne.org — site du projet

Site Hugo de **Penon**, présenté comme un projet **Tadorne**. Bilingue
EN (racine) / FR (`/fr/`), sans thème externe, sans JavaScript, sans requête
tierce.

## Construire

```console
$ hugo server          # http://localhost:1313/  (FR sur /fr/)
$ hugo --minify        # build de production dans public/
```

Requiert Hugo ≥ 0.146 (testé avec 0.166.0 extended, installé via Homebrew).
`public/` n'est pas versionné.

## Structure

```
hugo.toml              config, langues, menus, params (dont seoIndexable)
i18n/{en,fr}.toml      chaînes d'interface
content/en/            contenu anglais  → /
content/fr/            contenu français → /fr/
assets/css/            tokens.css (copie de brand/) + fonts.css + main.css
static/fonts/          5 woff2 auto-hébergés
layouts/               home, page, roadmap, log/, _partials/, _markup/
```

## Publier une info (le journal)

Les deux fichiers doivent porter le **même `translationKey`** — c'est le seul
lien entre les langues :

```console
$ hugo new content/en/log/ma-note.md
$ hugo new content/fr/journal/ma-note.md
```

```yaml
---
title: "Titre"
translationKey: log/ma-note
date: 2026-09-15
description: "Une ou deux phrases : listes, RSS et og:description."
params:
  tags: ["penon"]
---
```

Le fil RSS est sur `/log/index.xml` et `/fr/journal/index.xml`.

## Visualisateur 3D (socle)

Les pièces OpenSCAD sont montrées avec `socle`,
pré-calculé en glTF :

```sh
socle build \
  disque_bas_proto.scad -o /tmp/models \
  --json --compress br
# puis copier les .glb dans static/models/ et le bundle dans static/js/
```

Dans un article :

```
{{</* viewer src="/models/disque_bas_proto.glb" label="Disque bas" */>}}
```

Le post porte `params: { viewer: true }`, ce qui charge `scad-viewer.js` et
`penon-viewer-tint.js` — et rien sur les autres pages.

**Deux pièges, tous deux documentés ici parce qu'ils se reproduiront :**

1. **`disableHTML`** (`hugo.toml`). Le minifieur HTML de Hugo traite
   `controls` comme un attribut booléen et **supprime sa valeur** ; c'est
   précisément l'API de barre d'outils de `<scad-viewer>`. Sans ce réglage,
   `controls="views,wireframe,section,fullscreen"` devient `controls`.
   La minification CSS, elle, reste active.
2. **`static/js/penon-viewer-tint.js`**. socle peint sa palette sur un
   `.root` *à l'intérieur* du shadow DOM, et l'installe via
   `adoptedStyleSheets` : ni le CSS de la page ni un `<style>` ajouté ne
   peuvent la remplacer. Le script ajoute une feuille construite **après**
   la sienne, aux couleurs Tadorne. Si socle renomme `.root` ou ses
   variables, l'habillage cesse silencieusement de s'appliquer — dégât
   purement cosmétique.

Poids : le bundle du visualisateur fait 604 Ko (153 Ko brotli), les trois
modèles 1,25 Mo brut (365 Ko brotli). Les modèles sont chargés à
l'approche du viewport, pas au chargement de la page.

## Photos

```
{{</* photo src="img/journal/x.png" alt="…" caption="…" */>}}
```

L'image est cherchée dans `assets/`, réduite à 1400 px et convertie en WebP
(qualité 78) au build — 3,4–4,1 Mo en entrée, 144–344 Ko en sortie. Les
originaux restent dans `assets/` et ne sont jamais publiés tels quels.

## Indexation : volontairement fermée

`params.seoIndexable = false` dans `hugo.toml` → `<meta name="robots"
content="noindex, nofollow">` sur chaque page et `robots.txt` en
`Disallow: /`.

**À passer à `true`** quand la décision de publication est prise.

## Déploiement

`hugo --minify` produit un `public/` statique — n'importe quel hébergeur
statique convient. `netlify.toml` est fourni.

`baseURL` vaut `https://penon.tadorne.org/` ; le surcharger au besoin avec
`hugo --baseURL https://exemple/`.

## Licences

- Contenu (`content/`, images, vidéos, modèles 3D) : [CC BY-SA 4.0](LICENSE-CONTENT).
- Gabarits, CSS, JavaScript et configuration : [MIT](LICENSE).
- Polices (`static/fonts/`) : SIL Open Font License 1.1, propriété de leurs auteurs.
- `static/files/` : fichiers de fabrication publiés avec leur propre licence
  (CERN-OHL-S v2, texte joint dans chaque dossier).
