---
title: "Documentation technique"
translationKey: documentation
url: /fr/documentation/
description: "Principe, variantes, banc, mesures et mécanique de Penon — synthèse du journal, travail en cours."
params:
  eyebrow: "Penon — phase de banc"
  viewer: true
---

{{< callout title="Travail en cours" >}}
Cette page rassemble ce que le **[journal](/fr/journal/)** a déjà publié. Le journal fait foi ; cette page en est la synthèse, mise à jour au fil des notes. Les caractéristiques de l'instrument ne seront figées qu'à la sortie du banc.
{{< /callout >}}

Penon est un anémomètre de tête de mât **sans aucune pièce mobile**. Le vent se lit dans la manière dont il perturbe un champ ultrasonore entre des transducteurs fixes ; une centrale inertielle corrige la mesure du mouvement du bateau. Le projet en est à la **phase de banc** : la physique est mesurée avant que quoi que ce soit ne soit figé.

## Le principe

- **Rien qui bouge.** Pas de coupelles, pas de girouette, pas de roulement : des transducteurs fixes et un champ ultrasonore. Rien à gripper, rien à user.
- **Une mesure réciproque.** Le milieu s'annule, il reste le vent.
- **Le mouvement corrigé.** Une tête de mât bouge — roulis, tangage, accélération. La centrale inertielle embarquée corrige la mesure en temps réel : ce qui arrive au barreur est le vent, pas le mouvement du bateau.

## Deux pistes

| Piste | Ce qui est publié |
|---|---|
| **Temps de vol** | Une première version imprimée en 3D ([26 août 2026](/fr/journal/premiere-impression/)). |
| **Résonance** | Une cavité formée de deux disques, sondes montées à fleur du disque bas, disque haut en réflecteur. C'est la piste actuellement au banc. |

<figure>
  <img src="/img/prototype.webp" alt="Prototype mécanique imprimé en 3D, posé sur un rebord de fenêtre.">
  <figcaption>La première version temps de vol, imprimée en 3D.</figcaption>
</figure>

## Le banc

Le projet s'ouvre à l'établi, pas à l'eau. La cavité passe d'abord sous la mesure : **fréquence de résonance, facteur de qualité, pente de phase**.

Le montage tient sur une plaque d'essai, de l'émission à la réception : balayage en fréquence autour de 40 kHz, signal reçu relevé à l'oscilloscope, puis un étage d'amplification à ampli-op ajouté à la chaîne ([18 septembre](/fr/journal/premier-test-ampli-op/)).

<div class="photo-grid">
  <img src="/img/resonance-01.webp" alt="Le banc : cavité imprimée, plaque d'essai et oscilloscope affichant le signal d'émission.">
  <img src="/img/opamp-01.webp" alt="Le montage sur la plaque d'essai : l'étage d'amplification et les liaisons vers la cavité.">
  <img src="/img/banc-q-06.webp" alt="Le banc complet : cavité, plaque d'essai et oscilloscope.">
</div>

## Les mesures

Premiers résultats sur la cavité aluminium :

| Grandeur | Mesure | Note |
|---|---|---|
| Fréquence de résonance | 39,7 kHz | [2 octobre](/fr/journal/premiers-resultats-banc/) |
| Facteur de qualité Q | 287 | dix fois l'hypothèse de travail |
| Distance mécanique | retrouvée par l'écart entre modes | sans aucun paramètre ajusté |
| Amplitude hors résonance | prédite par la lorentzienne à 2 % près | |
| Dérive thermique | 75 Hz/°C mesurés, 70 Hz/°C prévus | [4 octobre](/fr/journal/derive-thermique/), sans paramètre ajusté |

La dérive thermique a été enregistrée sur une nuit, sans intervention mécanique. Les résidus tombent au niveau du plancher du banc : la relation est expliquée jusqu'à ce que l'instrument sait résoudre.

<figure>
  <img class="plot" src="/img/derive-thermique.svg" alt="Deux panneaux : à gauche la fréquence de résonance et la température au fil de la nuit ; à droite la fréquence en fonction de la température, avec la régression.">
  <figcaption>Une nuit d'enregistrement : fréquence de résonance et température, puis la fréquence en fonction de la température.</figcaption>
</figure>

## La mécanique

La cavité est passée de l'impression à l'aluminium, puis a reçu un boîtier et une semelle.

| Étape | Date | Ce qui change |
|---|---|---|
| [Disques imprimés](/fr/journal/premieres-pieces-proto/) | 10 sept. | Premiers disques du prototype résonance, en PETG |
| [Disques usinés](/fr/journal/usinage-disques-resonance/) | 30 sept. | Les deux disques usinés et percés en aluminium sur fraiseuse CNC |
| [Caisse assemblée](/fr/journal/caisse-resonance-alu/) | 2 oct. | Entretoises en place, vis au pourtour, ouvertures des sondes dégagées |
| [Boîtier durci](/fr/journal/boitier-durci/) | 5 oct. | La structure précédente a cassé ; six nervures reprennent la couronne jusqu'au pied de la douille de mât, sans porte-à-faux ; PETG imprimé retourné |
| [Semelle TPU](/fr/journal/semelle-tpu/) | 7 oct. | Semelle imprimée en TPU entre la cavité et le boîtier, après plusieurs réglages propres au TPU |

<div class="photo-grid">
  <img src="/img/usinage-01.webp" alt="La fraiseuse CNC usine un disque d'aluminium bridé sur le martyr.">
  <img src="/img/caisse-alu-02.webp" alt="La caisse assemblée vue de biais : les deux disques et leurs entretoises.">
  <img src="/img/structure-durcie-03.webp" alt="Le boîtier vu de biais : les nervures qui reprennent la couronne jusqu'au pied.">
  <img src="/img/semelle-tpu-06.webp" alt="La semelle en place entre la cavité aluminium et le boîtier.">
</div>

### Usinage des disques

Les deux plaques se forent **ensemble**, empilées dans le gabarit, pour un alignement parfait ; le Z0 ne change pas pour l'ouverture des transducteurs. Une fois les trous M2.5 faits, la pile se fixe au martyr par des vis, en plus du double face.

### Modèles 3D

{{< viewer src="/models/disque_bas_proto.glb" label="Disque bas — logements des trois transducteurs" >}}

{{< viewer src="/models/disque_haut_proto.glb" label="Disque haut — réflecteur" >}}

{{< viewer src="/models/eclate_cusa.glb" label="Vue éclatée — transducteur et joints toriques" >}}

## Fichiers publiés

Les programmes CNC de la variante résonance V2 sont publiés tels quels, signés avec la clé de publication Tadorne et horodatés par FreeTSA (RFC 3161), sous licence **CERN-OHL-S v2** :

- [Gabarit dans le martyr](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc) — [signature](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.asc), [horodatage](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.tsr)
- [Perçage des deux plaques](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc) — [signature](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.asc), [horodatage](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.tsr)
- [Fraisage de la plaque basse](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc) — [signature](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.asc), [horodatage](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.tsr)
- [Texte de la licence](/files/v2-plaques-z0disque/LICENSE-CERN-OHL-S-2.0.txt), [avis de publication](/files/v2-plaques-z0disque/NOTICE.txt)

Les mêmes fichiers, et la source de ce site, sont dans le dépôt [github.com/tadorne-org/penon](https://github.com/tadorne-org/penon). Vérification de la clé : [tadorne.org/verify](https://tadorne.org/verify/).

## L'horizon : le silicium libre

La chaîne de mesure repose aujourd'hui sur des pièces qu'un fournisseur unique peut arrêter. La réponse est un **cœur de mesure libre et caractérisé** : validé d'abord en RTL sur FPGA avec une chaîne d'outils libre, puis refait en silicium sur procédé ouvert, et republié comme bloc réutilisable, bien au-delà du vent. Dans la même famille de mesure de temps en silicium libre : [OpenTDC](https://github.com/tgingold/OpenTDC).

## État et points ouverts

| Point | État |
|---|---|
| Banc (M1) | en cours : fréquence et Q mesurés, dérive thermique caractérisée ; pente de phase et méthode à publier |
| Boîtier et semelle | imprimés ; tests au banc en cours |
| Électronique | chaîne émission-réception sur plaque d'essai ; carte et micrologiciel documentés à leur publication |
| Étalonnage (M3) | méthode ouverte à publier, reproductible par des tiers |
| Licences | G-code sous CERN-OHL-S v2 ; matériel et micrologiciel sous licences libres, annoncées à la première publication |

La suite est sur la [feuille de route](/fr/feuille-de-route/) : huit jalons, du banc au bloc de silicium caractérisé.

## Source : le journal

Chaque note du journal est la source de cette page, et le journal fait foi.

{{< log-sources >}}
