---
title: "Technical documentation"
translationKey: documentation
url: /documentation/
description: "Principle, variants, bench, measurements and mechanics of Penon — a digest of the log, work in progress."
params:
  eyebrow: "Penon — bench phase"
  viewer: true
---

{{< callout title="Work in progress" >}}
This page gathers what the **[log](/log/)** has already published. The log is authoritative; this page is its digest, updated as notes land. The instrument's specifications will only be frozen once it leaves the bench.
{{< /callout >}}

Penon is a masthead wind sensor with **no moving parts**. Wind is read in the way it disturbs an ultrasonic field between fixed transducers; an inertial unit corrects the measurement for the boat's motion. The project is in its **bench phase**: the physics is measured before anything is frozen.

## The principle

- **Nothing moves.** No cups, no vane, no bearing: fixed transducers and an ultrasonic field. Nothing to seize, nothing to wear.
- **A reciprocal measurement.** The medium cancels out, the wind remains.
- **Motion corrected.** A masthead moves — roll, pitch, acceleration. The on-board inertial unit corrects the measurement in real time: what reaches the helm is the wind, not the boat's motion.

## Two tracks

| Track | What is published |
|---|---|
| **Time of flight** | A first 3D-printed version ([26 August 2026](/log/first-print/)). |
| **Resonance** | A cavity formed by two discs, probes mounted flush with the lower disc, upper disc as reflector. This is the track currently on the bench. |

<figure>
  <img src="/img/prototype.webp" alt="3D-printed mechanical prototype on a windowsill.">
  <figcaption>The first time-of-flight version, 3D-printed.</figcaption>
</figure>

## The bench

The project opens at the workbench, not on the water. The cavity is measured first: **resonance frequency, quality factor, phase slope**.

The set-up fits on a breadboard, from transmission to reception: a frequency sweep around 40 kHz, the received signal read on the oscilloscope, then an op-amp amplification stage added to the chain ([18 September](/log/first-opamp-test/)).

<div class="photo-grid">
  <img src="/img/resonance-01.webp" alt="The bench: printed cavity, breadboard and oscilloscope showing the transmit signal.">
  <img src="/img/opamp-01.webp" alt="The breadboard set-up: the amplification stage and the links to the cavity.">
  <img src="/img/banc-q-06.webp" alt="The full bench: cavity, breadboard and oscilloscope.">
</div>

## Measurements

First results on the aluminium cavity:

| Quantity | Measurement | Note |
|---|---|---|
| Resonance frequency | 39.7 kHz | [2 October](/log/first-bench-results/) |
| Quality factor Q | 287 | ten times the working assumption |
| Mechanical distance | recovered from the mode spacing | no fitted parameter |
| Off-resonance amplitude | predicted by the Lorentzian within 2 % | |
| Thermal drift | 75 Hz/°C measured, 70 Hz/°C predicted | [4 October](/log/thermal-drift/), no fitted parameter |

The thermal drift was recorded over one night, with no mechanical intervention. The residuals fall to the bench's noise floor: the relation is explained down to what the instrument can resolve.

<figure>
  <img class="plot" src="/img/derive-thermique.svg" alt="Two panels: left, resonance frequency and temperature through the night; right, frequency against temperature with the regression.">
  <figcaption>One night of recording: resonance frequency and temperature, then frequency against temperature.</figcaption>
</figure>

## Mechanics

The cavity moved from print to aluminium, then gained a housing and a sole.

| Step | Date | What changes |
|---|---|---|
| [Printed discs](/log/first-prototype-parts/) | 10 Sept. | First discs of the resonance prototype, in PETG |
| [Machined discs](/log/machining-resonance-discs/) | 30 Sept. | Both discs milled and drilled in aluminium on a CNC mill |
| [Cavity assembled](/log/aluminium-resonance-cavity/) | 2 Oct. | Spacers in place, screws around the rim, probe openings cleared |
| [Hardened housing](/log/hardened-housing/) | 5 Oct. | The previous structure broke; six ribs carry the crown down to the foot of the mast socket, no overhang left; PETG, printed upside down |
| [TPU sole](/log/tpu-sole/) | 7 Oct. | A TPU sole printed between the cavity and the housing, after several TPU-specific settings |

<div class="photo-grid">
  <img src="/img/usinage-01.webp" alt="The CNC mill machining an aluminium disc clamped on the spoilboard.">
  <img src="/img/caisse-alu-02.webp" alt="The assembled cavity seen at an angle: both discs and their spacers.">
  <img src="/img/structure-durcie-03.webp" alt="The housing seen at an angle: the ribs carrying the crown down to the foot.">
  <img src="/img/semelle-tpu-06.webp" alt="The sole in place between the aluminium cavity and the housing.">
</div>

### Machining the discs

Drill both plates **together**, stacked in the fixture, for perfect alignment; do not change Z0 for the transducer openings. Once the M2.5 holes are made, screw the stack to the spoilboard as well as the double-sided tape.

### 3D models

{{< viewer src="/models/disque_bas_proto.glb" label="Lower disc — seats for the three transducers" >}}

{{< viewer src="/models/disque_haut_proto.glb" label="Upper disc — reflector" >}}

{{< viewer src="/models/eclate_cusa.glb" label="Exploded view — transducer and O-rings" >}}

## Published files

The CNC programs of the V2 resonance variant are published as they are, signed with the Tadorne publication key and timestamped by FreeTSA (RFC 3161), under the **CERN-OHL-S v2** licence:

- [Fixture in the spoilboard](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc) — [signature](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.asc), [timestamp](/files/v2-plaques-z0disque/v2_0_gabarit_fraise.nc.tsr)
- [Drilling both plates](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc) — [signature](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.asc), [timestamp](/files/v2-plaques-z0disque/v2_1_plaque_foret.nc.tsr)
- [Milling the lower plate](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc) — [signature](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.asc), [timestamp](/files/v2-plaques-z0disque/v2_2_plaque_bas_fraise.nc.tsr)
- [Licence text](/files/v2-plaques-z0disque/LICENSE-CERN-OHL-S-2.0.txt), [release notice](/files/v2-plaques-z0disque/NOTICE.txt)

The same files, and the source of this site, are in the repository [github.com/tadorne-org/penon](https://github.com/tadorne-org/penon). Key verification: [tadorne.org/verify](https://tadorne.org/verify/).

## The horizon: open silicon

Today the measurement chain relies on parts a single supplier can discontinue. The answer is an **open, characterised measurement core**: validated first in RTL on an FPGA with an open toolchain, then rebuilt in silicon on an open process, and republished as a reusable block, well beyond wind. In the same family of open-silicon time measurement: [OpenTDC](https://github.com/tgingold/OpenTDC).

## Status and open points

| Point | Status |
|---|---|
| Bench (M1) | in progress: frequency and Q measured, thermal drift characterised; phase slope and method to be published |
| Housing and sole | printed; bench tests in progress |
| Electronics | transmit–receive chain on a breadboard; board and firmware documented when published |
| Calibration (M3) | open method to be published, reproducible by third parties |
| Licences | G-code under CERN-OHL-S v2; hardware and firmware under free licences, announced at first release |

What comes next is on the [roadmap](/roadmap/): eight milestones, from the bench to a characterised silicon block.

## Source: the log

Every note in the log is a source for this page, and the log is authoritative.

{{< log-sources >}}
