---
title: "Machining the aluminium resonance discs"
translationKey: log/machining-resonance-discs
date: 2026-09-30
description: "Both cavity discs machined from aluminium."
params:
  tags: ["penon", "mechanics"]
---

The cavity leaves printing for aluminium: both discs machined and drilled on the CNC mill. Assembly and measurement next.

I recommend drilling both plates in one pass so they align perfectly in the fixture. And do not change the Z0 for the transducer openings. Once the M2.5 holes are drilled, screw the stack into the spoilboard as well, on top of the double-sided tape, to steady it.

<div class="photo-grid">
  <img src="/img/usinage-01.webp" alt="The CNC mill cutting an aluminium disc clamped to the spoilboard.">
  <img src="/img/usinage-02.webp" alt="Drilling an aluminium disc on the mill.">
  <img src="/img/usinage-03.webp" alt="Both machined discs: one plain, one drilled for the transducers.">
  <img src="/img/usinage-04.webp" alt="Drilling the two aluminium plates stacked in the fixture, on the spoilboard.">
</div>

## G-code

The three programs are published as they are:

- [Fixture in the spoilboard](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc): [signature](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.asc), [FreeTSA timestamp](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.tsr)
- [Drilling both plates](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc): [signature](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.asc), [FreeTSA timestamp](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.tsr)
- [Milling the lower plate](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc): [signature](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.asc), [FreeTSA timestamp](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.tsr)

The files are signed with the Tadorne publication key (fingerprint in the page footer) and timestamped by FreeTSA (RFC 3161). They are published under the **CERN-OHL-S v2** licence: [licence text](/files/v2-plaques-z0disque/LICENSE-CERN-OHL-S-2.0.txt), [release notice](/files/v2-plaques-z0disque/NOTICE.txt).
