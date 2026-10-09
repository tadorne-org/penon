# Penon

**Anémomètre de tête de mât sans aucune pièce mobile, corrigé du mouvement du
bateau. Matériel libre, jusqu'au silicium.** Un projet
[Tadorne](https://tadorne.org/).

## Le problème

Un capteur de tête de mât est une pièce qui casse — et le marché qui le
remplace est fermé.

## L'approche

- **Ultrasons, rien qui bouge.** Le vent se lit dans la manière dont il
  perturbe un champ ultrasonore entre des transducteurs fixes. La mesure est
  réciproque : le milieu s'annule, il reste le vent.
- **Le mouvement corrigé.** Une centrale inertielle embarquée corrige la
  mesure en temps réel : ce qui arrive au barreur est le vent, pas le roulis
  ni le tangage.
- **Le banc d'abord.** La physique est mesurée avant que quoi que ce soit ne
  soit figé, et la méthode d'étalonnage est publiée.
- **Vers le silicium libre.** Au bout du chemin, le cœur de mesure est refait
  en silicium libre et retourne aux communs comme bloc réutilisable.

## État

Phase de banc. Huit jalons, publiés au fur et à mesure :
[feuille de route](https://penon.tadorne.org/fr/feuille-de-route/) ·
[journal](https://penon.tadorne.org/fr/journal/).
Le kit n'est pas encore disponible ; testeurs et contributeurs bienvenus :
`contact@tadorne.org`.

## Contenu du dépôt

| Dossier | Contenu | Licence |
|---|---|---|
| [`mecanique/v2-plaques-z0disque/`](mecanique/v2-plaques-z0disque/) | Programmes CNC de la variante résonance V2 : gabarit et deux disques aluminium, avec signatures GPG et horodatages FreeTSA | [CERN-OHL-S v2](mecanique/v2-plaques-z0disque/LICENSE-CERN-OHL-S-2.0.txt) |
| [`site/`](site/) | Source Hugo de [penon.tadorne.org](https://penon.tadorne.org/) | contenu [CC BY-SA 4.0](site/LICENSE-CONTENT), gabarits [MIT](site/LICENSE) |

Les autres sources matérielles et logicielles rejoindront ce dépôt au fil de
leur publication, sous licences libres (matériel et micrologiciel).

## Authenticité

Les commits et les fichiers publiés sont signés par la clé Tadorne
(`5420 08E3 53EC A628 B4D6  ACAD 8C03 243A FF69 5BF7`) ; chaque commit est
horodaté par FreeTSA (RFC 3161), jeton rangé dans les notes Git
`refs/notes/freetsa`. Vérification : <https://tadorne.org/verify/>.

```sh
git fetch origin refs/notes/freetsa:refs/notes/freetsa
git notes --ref freetsa show HEAD
```
