# Catàleg historiogràfic de Tempo

Aquesta carpeta contindrà el contingut estructurat de l’ampliació de la web.

## Principis

- El manual i l’índex determinen l’estructura de parts i capítols.
- Les afirmacions substantives han d’incloure `sourceRefs`.
- Les pàgines sempre fan referència a una edició identificada.
- Les obres i les persones tenen identificadors estables, no noms utilitzats com
  a claus.
- Spotify ha d’apuntar a enregistraments concrets; una cerca genèrica només és
  una reserva temporal.
- Una obra pot tenir diverses gravacions per comparar interpretacions.
- Les guies d’escolta descriuen elements audibles i eviten judicis no
  justificats.

## Fitxers previstos

- `catalog-manifest.json`: llista ordenada dels blocs del catàleg.
- `catalog/*.json`: un bloc editorial per cada gran part històrica.
- `content.schema.json`: contracte estructural.
- `coverage.json`: correspondència entre l’índex del manual i el contingut
  publicat.
- `coverage.schema.json`: contracte del mapa de cobertura, amb pàgines, estat i
  mancances editorials per epígraf.
- `source-notes.md`: identificació de les edicions de referència i criteris
  d'ús de les fonts.

El primer mapa parteix de l'índex fotografiat de J. Peter Burkholder, Donald
Jay Grout i Claude V. Palisca, *Historia de la música occidental*, 9a edició
espanyola (Alianza Editorial, 2019). El PDF de *Historia de la música* del
Conservatorio Profesional de Música «Francisco Guerrero» (2014) s'utilitza com
a segona guia pedagògica i de contrast, especialment per a terminologia,
periodització i context.

## Estats de cobertura

Cada apartat de l’índex passarà per:

1. `indexed`: detectat a l’índex.
2. `sourced`: pàgines i fonts identificades.
3. `drafted`: text i relacions redactats.
4. `reviewed`: revisió factual i editorial.
5. `published`: integrat i verificat a la web pública.

No es considerarà complet un capítol només perquè tingui text: també ha de tenir
fonts rastrejables, conceptes relacionats i almenys una escolta guiada.

## Primera entrega desenvolupada

La part `part-ancient-medieval` ja disposa de catàleg navegable:

- 6 capítols i 18 apartats argumentals.
- 13 figures situades històricament.
- 11 obres amb enregistrament concret de Spotify i guia d'escolta.
- 19 conceptes amb trets audibles.
- 2 fonts de base identificades per edició i pàgines.

Les reconstruccions d'obres antigues i medievals es presenten explícitament com
interpretacions modernes. El model permet `personIds: []` en obres anònimes i
`workIds: []` en figures teòriques o institucionals, per evitar atribucions
fictícies.

## Controls editorials

- `node tools/audit-current-catalog.mjs` inventaria el web actual i comprova que
  cap període, compositor o estil quedi orfe durant la migració.
- `node tools/check-catalog-integrity.mjs data/catalog-manifest.json` comprova les
  relacions entre parts, capítols, persones, obres, conceptes i fonts.
- `node tools/check-coverage-integrity.mjs` comprova que el mapa conservi les
  sis parts i els trenta-nou capítols, sense epígrafs orfes ni valors invàlids.
- El segon control també rebutja cerques genèriques de Spotify i fragments amb
  marques temporals incoherents.
