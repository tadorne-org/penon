---
title: "Usinage aluminium des disques de résonance"
translationKey: log/machining-resonance-discs
date: 2026-09-30
description: "Les deux disques de la cavité usinés dans l'aluminium."
params:
  tags: ["penon", "mécanique"]
---

La cavité quitte l'impression pour l'aluminium : les deux disques sont usinés et percés sur la fraiseuse CNC. Restent le montage et la mesure.

Je conseille de forer les deux plaques simultanément pour avoir un alignement parfait dans le gabarit. Et ne changez pas le Z0 pour l'ouverture des transducteurs. Une fois les M2.5 créés, fixez la pile avec des vis dans le martyr, en plus du double face, pour bien la stabiliser.

<div class="photo-grid">
  <img src="/img/usinage-01.webp" alt="La fraiseuse CNC usine un disque d'aluminium bridé sur le martyr.">
  <img src="/img/usinage-02.webp" alt="Perçage d'un disque d'aluminium sur la fraiseuse.">
  <img src="/img/usinage-03.webp" alt="Les deux disques usinés : l'un plein, l'autre percé pour les sondes.">
  <img src="/img/usinage-04.webp" alt="Perçage des deux plaques d'aluminium empilées dans le gabarit, sur le martyr.">
</div>

## G-code

Les trois programmes sont publiés tels quels :

- [Gabarit dans le martyr](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc) : [signature](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.asc), [horodatage FreeTSA](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.tsr)
- [Perçage des deux plaques](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc) : [signature](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.asc), [horodatage FreeTSA](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.tsr)
- [Fraisage de la plaque basse](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc) : [signature](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.asc), [horodatage FreeTSA](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.tsr)

Les fichiers sont signés avec la clé de publication Tadorne (empreinte dans le pied de page) et horodatés par FreeTSA (RFC 3161). Ils sont publiés sous licence **CERN-OHL-S v2** : [texte de la licence](/files/v2-plaques-z0disque/LICENSE-CERN-OHL-S-2.0.txt), [avis de publication](/files/v2-plaques-z0disque/NOTICE.txt).
