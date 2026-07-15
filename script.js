const eras = [
  {
    id: "edat-mitjana",
    name: "Edat mitjana",
    dates: "c. 800–1400",
    color: "#40523c",
    description: "De la veu única del cant litúrgic a les primeres arquitectures polifòniques. La música s’escriu, viatja i comença a emancipar-se del ritual.",
    headline: "Quan la música va aprendre a escriure’s.",
    styles: ["Cant gregorià", "Organum", "Ars nova", "Música trobadoresca"],
    composers: [
      { name: "Hildegarda de Bingen", years: "1098–1179", style: "Monodia sacra", work: "O vis aeternitatis" },
      { name: "Léonin", years: "c. 1150–1201", style: "Organum", work: "Viderunt omnes" },
      { name: "Pérotin", years: "c. 1160–1230", style: "Polifonia", work: "Viderunt omnes" },
      { name: "Guillaume de Machaut", years: "c. 1300–1377", style: "Ars nova", work: "Messe de Nostre Dame" }
    ]
  },
  {
    id: "renaixement",
    name: "Renaixement",
    dates: "c. 1400–1600",
    color: "#b55234",
    description: "Les veus s’entrellacen amb equilibri i claredat. La impremta musical escampa repertoris i la polifonia vocal arriba a una subtilesa extraordinària.",
    headline: "L’harmonia de moltes veus humanes.",
    styles: ["Missa", "Motet", "Madrigal", "Chanson"],
    composers: [
      { name: "Josquin des Prés", years: "c. 1450–1521", style: "Polifonia francoflamenca", work: "Ave Maria… Virgo serena" },
      { name: "Giovanni P. da Palestrina", years: "c. 1525–1594", style: "Polifonia sacra", work: "Missa Papae Marcelli" },
      { name: "Orlando di Lasso", years: "1532–1594", style: "Motet", work: "Tristis est anima mea" },
      { name: "Tomás Luis de Victoria", years: "1548–1611", style: "Polifonia hispànica", work: "O magnum mysterium" }
    ]
  },
  {
    id: "barroc",
    name: "Barroc",
    dates: "c. 1600–1750",
    color: "#9a6e17",
    description: "Neixen l’òpera, el concert i la tonalitat moderna. El contrast, l’ornament i el baix continu converteixen la música en teatre d’emocions.",
    headline: "Drama, moviment i llum daurada.",
    styles: ["Òpera", "Concert", "Fuga", "Oratori", "Suite"],
    composers: [
      { name: "Claudio Monteverdi", years: "1567–1643", style: "Òpera", work: "L’Orfeo" },
      { name: "Antonio Vivaldi", years: "1678–1741", style: "Concert", work: "Les quatre estacions" },
      { name: "Johann S. Bach", years: "1685–1750", style: "Contrapunt", work: "Concerts de Brandenburg" },
      { name: "Georg F. Händel", years: "1685–1759", style: "Oratori", work: "Messiah" },
      { name: "Élisabeth Jacquet de La Guerre", years: "1665–1729", style: "Suite francesa", work: "Suite en re menor" },
      { name: "Henry Purcell", years: "1659–1695", style: "Òpera anglesa", work: "Dido and Aeneas" }
    ]
  },
  {
    id: "classicisme",
    name: "Classicisme",
    dates: "c. 1750–1820",
    color: "#36699c",
    description: "Forma, proporció i conversa. La simfonia i el quartet esdevenen laboratoris d’idees, mentre el piano conquista els salons i els escenaris.",
    headline: "L’elegància convertida en arquitectura.",
    styles: ["Simfonia", "Sonata", "Quartet de corda", "Concert clàssic"],
    composers: [
      { name: "Joseph Haydn", years: "1732–1809", style: "Simfonia", work: "Simfonia núm. 94, Sorpresa" },
      { name: "Wolfgang A. Mozart", years: "1756–1791", style: "Òpera i concert", work: "Rèquiem en re menor" },
      { name: "Ludwig van Beethoven", years: "1770–1827", style: "Transició romàntica", work: "Simfonia núm. 5" },
      { name: "Luigi Boccherini", years: "1743–1805", style: "Música de cambra", work: "Minuet, op. 11 núm. 5" }
    ]
  },
  {
    id: "romanticisme",
    name: "Romanticisme",
    dates: "c. 1810–1910",
    color: "#763d72",
    description: "La subjectivitat entra en escena. L’orquestra creix, el virtuosisme fascina i cada nació busca una veu pròpia entre el poema íntim i el drama monumental.",
    headline: "La música com a confessió i paisatge.",
    styles: ["Lied", "Poema simfònic", "Òpera romàntica", "Nacionalisme", "Virtuosisme"],
    composers: [
      { name: "Franz Schubert", years: "1797–1828", style: "Lied", work: "Erlkönig" },
      { name: "Frédéric Chopin", years: "1810–1849", style: "Piano romàntic", work: "Nocturn op. 9 núm. 2" },
      { name: "Clara Schumann", years: "1819–1896", style: "Piano i lied", work: "Concert per a piano en la menor" },
      { name: "Richard Wagner", years: "1813–1883", style: "Drama musical", work: "Tristan und Isolde: Prelude" },
      { name: "Giuseppe Verdi", years: "1813–1901", style: "Òpera italiana", work: "La traviata" },
      { name: "Piotr I. Txaikovski", years: "1840–1893", style: "Ballet i simfonia", work: "El llac dels cignes" }
    ]
  },
  {
    id: "segle-xx",
    name: "Segle XX",
    dates: "c. 1890–1975",
    color: "#2637ad",
    description: "La tonalitat es dissol, el ritme esclata i el timbre esdevé protagonista. Impressionisme, atonalisme, neoclassicisme i electrònica conviuen i discuteixen.",
    headline: "Trencar les regles per sentir de nou.",
    styles: ["Impressionisme", "Expressionisme", "Atonalisme", "Neoclassicisme", "Serialisme"],
    composers: [
      { name: "Claude Debussy", years: "1862–1918", style: "Impressionisme", work: "La mer" },
      { name: "Igor Stravinski", years: "1882–1971", style: "Modernisme", work: "La consagració de la primavera" },
      { name: "Arnold Schönberg", years: "1874–1951", style: "Dodecafonisme", work: "Pierrot lunaire" },
      { name: "Béla Bartók", years: "1881–1945", style: "Modernisme i folklore", work: "Concert per a orquestra" },
      { name: "Dmitri Xostakóvitx", years: "1906–1975", style: "Simfonisme soviètic", work: "Quartet de corda núm. 8" },
      { name: "Olivier Messiaen", years: "1908–1992", style: "Color i ritme", work: "Quatuor pour la fin du temps" }
    ]
  },
  {
    id: "contemporania",
    name: "Contemporània",
    dates: "des de 1975",
    color: "#d34a2e",
    description: "Minimalisme, espectralisme, electrònica i noves hibridacions. El concert dialoga amb el cinema, la tecnologia, la instal·lació i músiques d’arreu.",
    headline: "Tots els sons poden formar part de l’obra.",
    styles: ["Minimalisme", "Espectralisme", "Postmodernitat", "Electroacústica", "Nova simplicitat"],
    composers: [
      { name: "Steve Reich", years: "1936–", style: "Minimalisme", work: "Music for 18 Musicians" },
      { name: "Philip Glass", years: "1937–", style: "Minimalisme", work: "Glassworks" },
      { name: "Arvo Pärt", years: "1935–", style: "Tintinnabuli", work: "Spiegel im Spiegel" },
      { name: "Kaija Saariaho", years: "1952–2023", style: "Espectralisme", work: "L’Amour de loin" },
      { name: "John Adams", years: "1947–", style: "Postminimalisme", work: "Short Ride in a Fast Machine" },
      { name: "Caroline Shaw", years: "1982–", style: "Creació contemporània", work: "Partita for 8 Voices" }
    ]
  }
];

const eraProfiles = {
  "edat-mitjana": {
    society: "Monestirs, catedrals i corts són els grans centres musicals. La notació neumàtica i, més endavant, el pentagrama permeten conservar repertoris que abans depenien sobretot de la memòria.",
    sound: "Primer domina la monodia vocal sense acompanyament. Des del segle IX, l’organum superposa veus; al XIV, l’Ars nova introdueix una flexibilitat rítmica molt més gran.",
    innovation: "La notació mesurable, els modes eclesiàstics i les primeres formes polifòniques creen les bases de la tradició escrita occidental.",
    instruments: "Veu, orgue, arpa, llaüt, viola medieval, flautes i percussió.",
    listening: "Escolta si totes les veus avancen juntes o amb ritmes independents. Fixa’t en l’absència de l’harmonia tonal moderna i en la ressonància que suggereix l’espai d’una església.",
    legacy: "Va fixar les eines d’escriptura i contrapunt sobre les quals treballarien els segles posteriors.",
    source: "https://human.libretexts.org/Bookshelves/Music/Music_Education_and_Training/Do_You_Want_to_Major_in_Music_%28Wilson_and_Royston%29/07%3A_Musical_Traditions/7.01%3A_Western_European_Music_History"
  },
  renaixement: {
    society: "Esglésies, capelles cortesanes i ciutats sostenen músics professionals. La impremta musical de Petrucci, des de 1501, amplia molt la circulació de partitures.",
    sound: "Les veus tendeixen a un equilibri homogeni i imiten motius entre elles. La relació entre música i paraula guanya importància, especialment al madrigal.",
    innovation: "Es consoliden una polifonia vocal refinada, els gèneres instrumentals independents i una cultura musical internacional connectada per músics viatgers.",
    instruments: "Veu, llaüt, viola de gamba, flauta de bec, cornetto, sacabutx, virginal i orgue.",
    listening: "Segueix com un mateix motiu passa d’una veu a una altra. Observa les cadències suaus, el predomini vocal i la manera com la música ressalta paraules importants.",
    legacy: "El contrapunt renaixentista esdevindrà un model d’escriptura i ensenyament fins molt després del segle XVI.",
    source: "https://www.metmuseum.org/essays/music-in-the-renaissance"
  },
  barroc: {
    society: "Corts, esglésies i primers teatres públics d’òpera competeixen per l’espectacle. El músic treballa sovint al servei d’un patró o d’una institució.",
    sound: "Contrast intens, ornamentació, baix continu i direcció tonal. La melodia principal s’allunya de l’equilibri de veus renaixentista i reclama protagonisme.",
    innovation: "Neixen i es desenvolupen l’òpera, el concert solista, l’oratori i la fuga; la família del violí i l’orquestra moderna guanyen centralitat.",
    instruments: "Clavecí, orgue, violí barroc, viola da gamba, oboè, fagot, trompeta natural i tiorba.",
    listening: "Busca el baix continu, les repeticions seqüencials i el diàleg entre solista i conjunt. El ritme acostuma a mantenir un impuls constant.",
    legacy: "Va establir la tonalitat funcional i molts gèneres que encara estructuren la vida de concert.",
    source: "https://human.libretexts.org/Bookshelves/Music/Music_Education_and_Training/Do_You_Want_to_Major_in_Music_%28Wilson_and_Royston%29/07%3A_Musical_Traditions/7.01%3A_Western_European_Music_History"
  },
  classicisme: {
    society: "La Il·lustració, el creixement del concert públic i una burgesia musical amplien els espais més enllà de la cort. Viena es converteix en un centre decisiu.",
    sound: "Frases simètriques, textures més transparents i contrast temàtic. La forma articula expectatives clares que el compositor confirma, retarda o sorprèn.",
    innovation: "La forma sonata, la simfonia, el quartet de corda i el concert clàssic arriben a una gran maduresa; el pianoforte substitueix gradualment el clavecí.",
    instruments: "Pianoforte, quartet de corda, clarinet i orquestra clàssica amb vents organitzats per parelles.",
    listening: "Identifica una idea inicial, una zona de contrast i el retorn. Fixa’t en silencis, proporcions i converses entre famílies instrumentals.",
    legacy: "Les seves formes continuen sent un punt de referència central per a la composició, l’anàlisi i el repertori de concert.",
    source: "https://human.libretexts.org/Bookshelves/Music/Music_Education_and_Training/Do_You_Want_to_Major_in_Music_%28Wilson_and_Royston%29/07%3A_Musical_Traditions/7.01%3A_Western_European_Music_History"
  },
  romanticisme: {
    society: "Revolucions, industrialització i nacionalismes transformen Europa. El compositor independent, el virtuós itinerant i el públic burgès adquireixen més pes.",
    sound: "Harmonia més cromàtica, frase flexible i orquestra ampliada. La música busca expressar identitat, literatura, natura, memòria i experiència interior.",
    innovation: "El lied i les miniatures de piano conviuen amb simfonies, òperes i cicles monumentals. El poema simfònic connecta música i relat extramusical.",
    instruments: "Piano modern, gran orquestra, nous metalls amb vàlvules, arpa i seccions de vent ampliades.",
    listening: "Segueix l’expansió i transformació dels temes. Escolta el cromatisme, els canvis de tempo expressius i el color específic de cada instrument.",
    legacy: "Va consolidar el cànon de concert, el director modern i una idea de l’obra musical com a expressió personal profunda.",
    source: "https://human.libretexts.org/Bookshelves/Music/Music_Education_and_Training/Do_You_Want_to_Major_in_Music_%28Wilson_and_Royston%29/07%3A_Musical_Traditions/7.01%3A_Western_European_Music_History"
  },
  "segle-xx": {
    society: "Guerres, migracions, enregistrament sonor, ràdio i cinema alteren radicalment la producció i l’escolta. Els compositors responen a un món fragmentat.",
    sound: "No hi ha un únic llenguatge: modalitat, atonalisme, serialisme, folklore, jazz, soroll i noves escales conviuen en estètiques molt diferents.",
    innovation: "El ritme, el timbre i la textura poden organitzar una obra tant com l’harmonia. Apareixen tècniques esteses, música concreta i síntesi electrònica.",
    instruments: "Orquestra expandida, percussió autònoma, piano preparat, cinta magnètica, sintetitzador i instruments tradicionals reimaginats.",
    listening: "Pregunta’t quin element organitza la peça: una sèrie, un patró rítmic, un color o una textura. No busquis necessàriament una melodia tradicional.",
    legacy: "Va pluralitzar definitivament la idea de música artística i va obrir el repertori a qualsevol material sonor.",
    source: "https://human.libretexts.org/Courses/Los_Angeles_City_College/Music_History_Sequence_LACC/01%3A_Introduction_to_Music_History"
  },
  contemporania: {
    society: "Globalització, estudis electroacústics, internet i col·laboracions interdisciplinàries desdibuixen fronteres entre concert, instal·lació, cinema i escena.",
    sound: "Conviuen minimalisme, espectralisme, noves consonàncies, improvisació, mostreig i hibridacions amb tradicions no occidentals i músiques populars.",
    innovation: "La tecnologia pot ser instrument, espai i procés. Moltes obres incorporen vídeo, electrònica en viu, algoritmes o participació del públic.",
    instruments: "Ensemble acústic, electrònica en viu, ordinador, objectes, veu expandida i instruments de qualsevol tradició.",
    listening: "Observa processos graduals, espectres harmònics, capes repetitives o canvis microscòpics de timbre. El silenci i l’espai també poden estructurar l’obra.",
    legacy: "És una història encara oberta: les categories són provisionals i el cànon es revisa constantment.",
    source: "https://human.libretexts.org/Courses/Los_Angeles_City_College/Music_History_Sequence_LACC/01%3A_Introduction_to_Music_History"
  }
};

const composerProfiles = {
  "Hildegarda de Bingen": ["Abadessa benedictina, escriptora i compositora renana, va reunir una de les col·leccions monòdiques més singulars del segle XII.", "Les seves melodies amplien l’àmbit habitual del cant litúrgic i uneixen música, poesia i una teologia visionària pròpia.", ["O vis aeternitatis", "Ordo Virtutum", "O rubor sanguinis"]],
  "Léonin": ["Compositor associat a Notre-Dame de París i actiu al final del segle XII; la seva identitat es coneix principalment pel testimoni posterior d’un teòric anònim.", "Se li atribueix una part del Magnus Liber Organi, repertori fonamental per al desenvolupament de l’organum a dues veus.", ["Viderunt omnes", "Alleluia Pascha nostrum", "Magnus Liber Organi"]],
  "Pérotin": ["Compositor vinculat a l’escola de Notre-Dame, actiu entorn del 1200 i conegut per grans peces polifòniques a tres i quatre veus.", "Va portar l’organum a una escala i complexitat inèdites, amb seccions rítmiques coordinades i una arquitectura sonora monumental.", ["Viderunt omnes", "Sederunt principes", "Alleluia nativitas"]],
  "Guillaume de Machaut": ["Poeta i compositor francès, figura central de l’Ars nova i un dels primers autors occidentals amb un corpus extens preservat sota el seu nom.", "Va integrar refinament poètic i innovació rítmica en cançons polifòniques i en la Messe de Nostre Dame, un cicle de missa d’unitat excepcional.", ["Messe de Nostre Dame", "Douce dame jolie", "Ma fin est mon commencement"]],
  "Josquin des Prés": ["Compositor francoflamenc que treballà en diverses corts i capelles europees entre els segles XV i XVI.", "La seva música destaca per la imitació clara entre veus i una relació expressiva entre text i estructura musical.", ["Ave Maria… Virgo serena", "Missa Pange lingua", "Mille regretz"]],
  "Giovanni P. da Palestrina": ["Compositor italià dedicat sobretot a la música sacra i actiu a les principals institucions eclesiàstiques de Roma.", "El seu contrapunt vocal equilibrat es convertí en model pedagògic de l’estil polifònic renaixentista.", ["Missa Papae Marcelli", "Sicut cervus", "Stabat Mater"]],
  "Orlando di Lasso": ["Compositor francoflamenc cosmopolita que desenvolupà gran part de la carrera a la cort bavaresa de Munic.", "Va dominar gèneres sagrats i profans en diverses llengües, amb una paleta expressiva extraordinàriament àmplia.", ["Tristis est anima mea", "Prophetiae Sibyllarum", "Matona mia cara"]],
  "Tomás Luis de Victoria": ["Sacerdot i compositor nascut a Àvila, format a Roma i actiu posteriorment a Madrid.", "La seva polifonia sacra combina claredat contrapuntística amb una intensitat dramàtica i espiritual molt personal.", ["O magnum mysterium", "Officium Defunctorum", "Ave Maria"]],
  "Claudio Monteverdi": ["Compositor italià actiu a Màntua i Venècia, situat en la transició entre el Renaixement i el Barroc.", "Va transformar el madrigal i contribuí decisivament a donar profunditat dramàtica i continuïtat musical a la primera òpera.", ["L’Orfeo", "Vespro della Beata Vergine", "L’incoronazione di Poppea"]],
  "Antonio Vivaldi": ["Violinista, sacerdot i compositor venecià, vinculat durant dècades a l’Ospedale della Pietà.", "Va fixar un model de concert solista en tres moviments i desenvolupà una escriptura instrumental brillant i descriptiva.", ["Les quatre estacions", "Gloria RV 589", "L’estro armonico"]],
  "Johann S. Bach": ["Compositor i organista alemany que treballà en corts, esglésies i finalment a l’escola de Sant Tomàs de Leipzig.", "Va sintetitzar estils europeus i portà el contrapunt, la forma i l’harmonia tonal a una densitat i coherència excepcionals.", ["Concerts de Brandenburg", "Passió segons sant Mateu", "El clavecí ben temperat"]],
  "Georg F. Händel": ["Compositor nascut a Halle, format a Alemanya i Itàlia i establert a Londres, on desenvolupà una carrera pública de gran èxit.", "Va unir l’òpera italiana, l’oratori anglès i una poderosa escriptura coral pensada per a grans audiències.", ["Messiah", "Water Music", "Giulio Cesare"]],
  "Élisabeth Jacquet de La Guerre": ["Clavecinista i compositora francesa protegida per Lluís XIV, una de les creadores més visibles de la seva generació.", "Va publicar música per a teclat i cambra i estrenà Céphale et Procris, una de les primeres òperes franceses compostes per una dona.", ["Céphale et Procris", "Pièces de clavecin", "Sonates pour le violon"]],
  "Henry Purcell": ["Compositor anglès vinculat a la cort, la capella reial i l’abadia de Westminster durant la Restauració.", "Va fusionar tradició contrapuntística anglesa i influències franceses i italianes amb una declamació del text especialment expressiva.", ["Dido and Aeneas", "King Arthur", "Fantazias"]],
  "Joseph Haydn": ["Compositor austríac que treballà llargament per als Esterházy i assolí després una fama internacional extraordinària.", "Va contribuir decisivament al desenvolupament de la simfonia i el quartet de corda mitjançant forma, humor i elaboració motívica.", ["La Creació", "Simfonia núm. 94, Sorpresa", "Quartets op. 76"]],
  "Wolfgang A. Mozart": ["Compositor de Salzburg, virtuós infantil i músic independent a Viena, creador en pràcticament tots els gèneres del seu temps.", "Va unir transparència formal, caracterització teatral i una gran sofisticació harmònica en òpera, concert i música de cambra.", ["Don Giovanni", "Rèquiem en re menor", "Simfonia núm. 41, Júpiter"]],
  "Ludwig van Beethoven": ["Compositor nascut a Bonn i establert a Viena, figura clau entre el Classicisme i el Romanticisme.", "Va expandir l’escala, la tensió narrativa i l’ambició expressiva de la simfonia, la sonata i el quartet.", ["Simfonia núm. 5", "Simfonia núm. 9", "Sonata Clar de lluna"]],
  "Luigi Boccherini": ["Violoncel·lista i compositor italià que desenvolupà bona part de la seva carrera a Espanya.", "Va donar protagonisme virtuós i líric al violoncel i enriquí el repertori de quintet de corda amb un color instrumental propi.", ["Minuet op. 11 núm. 5", "Musica notturna delle strade di Madrid", "Concert per a violoncel en si bemoll"]],
  "Franz Schubert": ["Compositor vienès que, malgrat una vida breu, deixà centenars de cançons i un ampli catàleg instrumental.", "Va convertir el lied en una síntesi profunda de poesia, veu i piano i amplià l’harmonia amb modulacions de gran força narrativa.", ["Erlkönig", "Winterreise", "Simfonia Inacabada"]],
  "Frédéric Chopin": ["Pianista i compositor polonès instal·lat a París, dedicà gairebé tota la seva producció al piano.", "Va redefinir la sonoritat, el fraseig i la tècnica pianística, integrant danses poloneses, ornamentació i harmonia innovadora.", ["Nocturn op. 9 núm. 2", "Balada núm. 1", "Estudis op. 10"]],
  "Clara Schumann": ["Pianista, compositora i editora alemanya, una de les intèrprets més influents del segle XIX.", "Va impulsar una nova cultura del recital, defensà repertori de Bach a Brahms i deixà obres de gran exigència pianística i lírica.", ["Concert per a piano en la menor", "Trio amb piano op. 17", "Drei Romanzen op. 22"]],
  "Richard Wagner": ["Compositor i llibretista alemany que concebí les seves òperes com a drames musicals integrals.", "Va desenvolupar el leitmotiv, amplià el cromatisme i repensà la relació entre música, text, escena i arquitectura teatral.", ["Tristan und Isolde", "Der Ring des Nibelungen", "Tannhäuser"]],
  "Giuseppe Verdi": ["Compositor italià d’òpera, actiu durant el Risorgimento i central en la vida teatral europea del segle XIX.", "Va combinar eficàcia dramàtica, caracterització vocal i una evolució constant de l’estructura operística.", ["La traviata", "Rigoletto", "Messa da Requiem"]],
  "Piotr I. Txaikovski": ["Compositor rus de formació professional, autor d’òperes, ballets, concerts i sis simfonies numerades.", "Va unir tècnica occidental, intensitat melòdica i color orquestral en obres d’enorme impacte emocional i popular.", ["El llac dels cignes", "Simfonia núm. 6, Patètica", "Concert per a piano núm. 1"]],
  "Claude Debussy": ["Compositor francès que cercà alternatives a la direcció harmònica i les formes heretades del Romanticisme alemany.", "Va reorganitzar la música entorn del timbre, l’escala, la ressonància i una temporalitat més fluida.", ["La mer", "Prélude à l’après-midi d’un faune", "Clair de lune"]],
  "Igor Stravinski": ["Compositor nascut a Rússia i posteriorment ciutadà francès i nord-americà, protagonista de múltiples canvis estilístics.", "Va revolucionar el ritme i l’orquestració i després reinterpretà formes antigues des del neoclassicisme i el serialisme.", ["La consagració de la primavera", "L’ocell de foc", "Pulcinella"]],
  "Arnold Schönberg": ["Compositor i teòric vienès, fundador de la Segona Escola de Viena i exiliat als Estats Units pel nazisme.", "Va passar de l’atonalisme lliure al mètode dodecafònic, una nova manera d’organitzar les dotze notes cromàtiques.", ["Pierrot lunaire", "Verklärte Nacht", "Moses und Aron"]],
  "Béla Bartók": ["Compositor, pianista i etnomusicòleg hongarès que enregistrà i estudià milers de melodies tradicionals.", "Va integrar estructures del folklore d’Europa oriental amb ritme, harmonia i forma modernistes sense limitar-se a citar melodies.", ["Concert per a orquestra", "Música per a corda, percussió i celesta", "Mikrokosmos"]],
  "Dmitri Xostakóvitx": ["Compositor soviètic la carrera del qual estigué marcada per l’èxit públic i la pressió política de l’estalinisme.", "Va renovar simfonia i quartet amb contrastos extrems, ironia, cites i una veu musical capaç de lectures múltiples.", ["Quartet de corda núm. 8", "Simfonia núm. 5", "Simfonia núm. 7, Leningrad"]],
  "Olivier Messiaen": ["Compositor, organista i professor francès, profundament influït per la fe catòlica, el cant dels ocells i els ritmes no occidentals.", "Va crear modes i sistemes rítmics propis i tractà harmonia i timbre com a experiències de color.", ["Quatuor pour la fin du temps", "Turangalîla-Symphonie", "Catalogue d’oiseaux"]],
  "Steve Reich": ["Compositor nord-americà associat al minimalisme i a processos musicals audibles.", "Va desenvolupar tècniques de desfasament, pulsació i cànon que transformaren la percepció del temps musical.", ["Music for 18 Musicians", "Different Trains", "Drumming"]],
  "Philip Glass": ["Compositor nord-americà amb una obra extensa en òpera, cinema, teatre i música instrumental.", "Va popularitzar una escriptura basada en arpegis, repetició i transformació gradual, connectant l’avantguarda amb audiències àmplies.", ["Glassworks", "Einstein on the Beach", "Koyaanisqatsi"]],
  "Arvo Pärt": ["Compositor estonià que, després d’una etapa serial, desenvolupà a la dècada de 1970 el seu estil tintinnabuli.", "Va construir una música austera que relaciona veus escalístiques i notes de tríada, amb un ús estructural del silenci.", ["Spiegel im Spiegel", "Fratres", "Tabula rasa"]],
  "Kaija Saariaho": ["Compositora finlandesa establerta a París, formada en música espectral i tecnologia electroacústica.", "Va explorar la continuïtat entre timbre i harmonia, combinant instruments i electrònica amb una escriptura de gran detall sonor.", ["L’Amour de loin", "Graal théâtre", "Orion"]],
  "John Adams": ["Compositor i director nord-americà, associat al postminimalisme i a l’òpera sobre temes històrics contemporanis.", "Va combinar pulsació minimalista, gran orquestra i desenvolupament dramàtic hereu de la tradició simfònica.", ["Short Ride in a Fast Machine", "Nixon in China", "Harmonielehre"]],
  "Caroline Shaw": ["Compositora, violinista i cantant nord-americana que treballa entre música vocal, cambra, escena i col·laboracions populars.", "La seva obra reinterpreta formes històriques amb tècniques vocals expandides, gest físic i una relació directa amb l’espai interpretatiu.", ["Partita for 8 Voices", "Orange", "Entr’acte"]]
};

const styleProfiles = {
  "Cant gregorià": ["Cant litúrgic monòdic en llatí, transmès durant segles i organitzat segons els modes eclesiàstics. El ritme segueix la prosòdia del text més que una pulsació regular.", "Una sola línia melòdica, veu sense acompanyament, moviment conjunt i sensació d’espai modal.", "Hildegarda de Bingen · O vis aeternitatis"],
  "Organum": ["Primera gran pràctica polifònica escrita de l’Occident medieval: afegeix una o més veus a un cant preexistent, sovint sostingut en valors llargs.", "Una veu greu molt lenta i, al damunt, línies més mòbils; en Pérotin, patrons rítmics clarament coordinats.", "Pérotin · Viderunt omnes"],
  "Ars nova": ["Estil del segle XIV caracteritzat per una notació rítmica més flexible, isorítmia i formes polifòniques profanes i sagrades sofisticades.", "Ritmes sincopats, independència de les veus i estructures que repeteixen patrons de durada.", "Machaut · Messe de Nostre Dame"],
  "Música trobadoresca": ["Cançó cortesana monòdica en llengua vernacla, vinculada a poesia d’amor, sàtira o política i cultivada per trobadors i trobairitz.", "Melodia sola, text estròfic i possible acompanyament instrumental que les fonts no especifiquen completament.", "Comtessa de Dia · A chantar m’er"],
  "Missa": ["Cicle musical de les parts fixes de la litúrgia —Kyrie, Gloria, Credo, Sanctus i Agnus Dei—, sovint unificat per material compartit.", "Com reapareixen motius entre moviments i com les veus equilibren intel·ligibilitat i densitat contrapuntística.", "Palestrina · Missa Papae Marcelli"],
  "Motet": ["Composició vocal polifònica, principalment sacra al Renaixement, sobre un text llatí diferent del cicle ordinari de la missa.", "Imitacions successives, canvis de textura i una música que respon a frases concretes del text.", "Victoria · O magnum mysterium"],
  "Madrigal": ["Peça vocal profana italiana, habitualment per a diverses veus, que cerca representar amb detall les imatges i emocions d’un poema.", "Canvis sobtats d’harmonia, textura o registre que il·lustren paraules: l’anomenat madrigalisme.", "Monteverdi · Si ch’io vorrei morire"],
  "Chanson": ["Cançó polifònica francesa sobre poesia vernacla; el terme engloba formes diferents entre els segles XV i XVI.", "Textura més lleugera que la missa, ritme viu i frases modelades per la llengua francesa.", "Josquin · Mille regretz"],
  "Òpera": ["Teatre íntegrament o majoritàriament cantat, nascut entorn del 1600 de la voluntat d’unir drama, poesia, música i escena.", "Alternança entre narració, àries, conjunts i intervencions instrumentals que defineixen personatges i acció.", "Monteverdi · L’Orfeo"],
  "Concert": ["Forma instrumental barroca basada en el contrast entre un solista o grup de solistes i un conjunt més ampli.", "Retorn d’un passatge orquestral —ritornello— i episodis solistes de dificultat o caràcter contrastant.", "Vivaldi · La primavera"],
  "Fuga": ["Procediment contrapuntístic en què un subjecte entra successivament en diferents veus i es desenvolupa mitjançant imitació i transformació.", "El retorn del mateix subjecte en registres diferents, episodis modulants i superposicions cada vegada més estretes.", "Bach · Fuga en do menor, BWV 847"],
  "Oratori": ["Gran obra narrativa per a solistes, cor i orquestra, habitualment de tema sagrat i presentada sense escenificació teatral completa.", "Recitatius que fan avançar el relat, àries reflexives i cors que representen una comunitat o comenten l’acció.", "Händel · Messiah"],
  "Suite": ["Successió de danses estilitzades o moviments contrastants, sovint en una mateixa tonalitat i pensats per a instrument o conjunt.", "Canvis de metre i caràcter entre allemande, courante, sarabande, gigue i altres danses.", "Bach · Suite per a violoncel núm. 1"],
  "Simfonia": ["Obra extensa per a orquestra, habitualment en diversos moviments, que esdevé un dels principals espais de desenvolupament formal des del Classicisme.", "Contrastos entre moviments i famílies instrumentals, retorns temàtics i una trajectòria global de tensió i resolució.", "Haydn · Simfonia núm. 94"],
  "Sonata": ["Obra instrumental en un o diversos moviments; també dona nom a una forma basada en exposició, desenvolupament i recapitulació.", "Dos camps temàtics contrastants, modulació, transformació dels motius i retorn a la tonalitat inicial.", "Beethoven · Sonata Patètica"],
  "Quartet de corda": ["Gènere per a dos violins, viola i violoncel que afavoreix una conversa equilibrada entre quatre veus instrumentals.", "Com el material passa d’un instrument a un altre i com cada línia conserva independència dins del conjunt.", "Haydn · Quartet op. 76 núm. 3"],
  "Concert clàssic": ["Concert solista de l’època clàssica, normalment en tres moviments, que integra virtuosisme i lògica simfònica.", "Diàleg entre solista i orquestra, doble exposició al primer moviment i una cadència solista prop del final.", "Mozart · Concert per a piano núm. 20"],
  "Lied": ["Cançó artística alemanya per a veu i piano que interpreta poèticament un text, especialment central al Romanticisme.", "El piano no és només acompanyament: crea paisatge, personatges o símbols que transformen el sentit del poema.", "Schubert · Erlkönig"],
  "Poema simfònic": ["Obra orquestral en un sol moviment inspirada per un poema, relat, paisatge o idea extramusical.", "Temes que representen idees i es transformen seguint una trajectòria narrativa més que un esquema fix.", "Liszt · Les Préludes"],
  "Òpera romàntica": ["Teatre musical del segle XIX que amplia l’orquestra, la continuïtat dramàtica i la intensitat psicològica dels personatges.", "Motius associats a personatges, gran arc vocal i una orquestra que revela emocions més enllà del text.", "Wagner · Tristan und Isolde"],
  "Nacionalisme": ["Tendència que construeix identitat musical mitjançant llengua, mites, danses, melodies o trets modals associats a una comunitat.", "Ritmes de dansa, escales i colors instrumentals que s’allunyen del llenguatge centreeuropeu dominant.", "Dvořák · Danses eslaves"],
  "Virtuosisme": ["Escriptura que explora els límits tècnics i expressius d’un intèrpret, vinculada al creixement del concert públic i la figura de l’estrella solista.", "Velocitat, salts, registres extrems i efectes que converteixen la dificultat en gest dramàtic.", "Chopin · Estudis op. 10"],
  "Impressionisme": ["Etiqueta aplicada sobretot a música francesa que prioritza timbre, ressonància, escales no funcionals i formes fluides; Debussy rebutjava el terme.", "Acords que funcionen com a color, escales de tons enters o pentatòniques i contorns més que direccions harmòniques previsibles.", "Debussy · La mer"],
  "Expressionisme": ["Estètica d’inici del segle XX que intensifica dissonància, gest i contrast per explorar estats psicològics extrems.", "Registres sobtats, línies fragmentades, densitat variable i una tensió que no sempre busca resolució tonal.", "Schönberg · Erwartung"],
  "Atonalisme": ["Música que evita establir una nota o acord com a centre tonal estable. No implica absència d’organització, sinó altres maneres d’articular relacions.", "Dissonàncies no resoltes, intervals recurrents i absència de les cadències major-menor habituals.", "Berg · Wozzeck"],
  "Neoclassicisme": ["Relectura moderna de formes, textures i gestos dels segles XVII i XVIII, especialment activa entre les dues guerres mundials.", "Contorns antics amb harmonies, ritmes o instrumentacions inequívocament modernes; claredat combinada amb distància irònica.", "Stravinski · Pulcinella"],
  "Serialisme": ["Mètodes que ordenen elements musicals en sèries; el dodecafonisme organitza les dotze notes i el serialisme integral estén el principi a altres paràmetres.", "Transformacions d’una mateixa successió de notes i absència d’una jerarquia tonal tradicional.", "Schönberg · Variacions per a orquestra op. 31"],
  "Minimalisme": ["Música basada en materials reduïts, pulsació clara, repetició i processos graduals que fan perceptible el canvi en el temps.", "Patrons que es desplacen, sumen notes o canvien d’accent mentre l’harmonia evoluciona lentament.", "Reich · Music for 18 Musicians"],
  "Espectralisme": ["Enfocament compositiu desenvolupat des dels anys setanta que deriva harmonia i forma de l’espectre acústic i de l’evolució interna del so.", "Fusions instrumentals, microintervals i transformacions lentes entre soroll i altura definida.", "Saariaho · Lichtbogen"],
  "Postmodernitat": ["Conjunt heterogeni d’actituds que permet citar, barrejar i recontextualitzar estils històrics o populars sense una única idea de progrés lineal.", "Canvis de registre estilístic, cites recognoscibles i convivència de llenguatges abans considerats incompatibles.", "Schnittke · Concerto grosso núm. 1"],
  "Electroacústica": ["Música creada o transformada amb tecnologia electrònica, des de cinta i síntesi fins a processament digital en viu.", "Sons sense font visible, moviments espacials, transformacions impossibles acústicament i continuïtats entre instrument i altaveu.", "Varèse · Poème électronique"],
  "Nova simplicitat": ["Terme aplicat a diverses reaccions contra la complexitat avantguardista, amb retorns molt diferents a claredat, consonància o expressió directa.", "Materials aparentment simples, tempos amplis i una atenció intensa a ressonància, silenci o repetició.", "Pärt · Tabula rasa"]
};

const timeline = document.querySelector("#timeline");
const eraNav = document.querySelector("#era-nav");
const search = document.querySelector("#search");
const noResults = document.querySelector("#no-results");
const clearSearch = document.querySelector("#clear-search");
const detailDialog = document.querySelector("#detail-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector("#dialog-close");

const spotifyUrl = (composer, work) => `https://open.spotify.com/search/${encodeURIComponent(`${composer} ${work}`)}`;
const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function renderNav() {
  eraNav.innerHTML = eras.map((era, index) => `
    <a class="era-link${index === 0 ? " active" : ""}" href="#${era.id}" data-era="${era.id}">
      ${String(index + 1).padStart(2, "0")} ${era.name}
    </a>
  `).join("");
}

function composerCard(composer, eraId) {
  const label = `Amplia la informació sobre ${composer.name}`;
  return `
    <button class="composer-card" type="button" data-composer="${composer.name}" data-era="${eraId}" aria-haspopup="dialog" aria-label="${label}">
      <span class="composer-meta"><span>${composer.style}</span><span>${composer.years}</span></span>
      <span class="composer-name">${composer.name}</span>
      <span class="work"><span>${composer.work}</span><span class="card-action">Biografia <span aria-hidden="true">↗</span></span></span>
    </button>
  `;
}

function renderTimeline(query = "") {
  const term = normalize(query.trim());
  let matches = 0;

  timeline.innerHTML = eras.map((era, index) => {
    const eraText = normalize([era.name, era.description, era.headline, ...era.styles].join(" "));
    const composers = era.composers.filter(composer => {
      if (!term) return true;
      return eraText.includes(term) || normalize(Object.values(composer).join(" ")).includes(term);
    });

    if (!composers.length) return "";
    matches += composers.length;

    return `
      <section class="era" id="${era.id}" style="--era-color:${era.color}">
        <div class="era-side" data-number="${index + 1}">
          <p class="era-dates">${era.dates}</p>
          <h2>${era.name}</h2>
          <p class="era-side-copy">${era.description}</p>
          <button class="era-focus-button" type="button" data-focus-era="${era.id}" aria-haspopup="dialog">
            Amplia el context <span aria-hidden="true">⊕</span>
          </button>
        </div>
        <div class="era-main">
          <div class="era-intro">
            <h3>${era.headline}</h3>
            <div class="style-list" aria-label="Estils principals">
              ${era.styles.map(style => `<button class="style-chip" type="button" data-style="${style}" data-era="${era.id}" aria-haspopup="dialog">${style} ↗</button>`).join("")}
            </div>
          </div>
          <div class="composer-grid">
            ${composers.map(composer => composerCard(composer, era.id)).join("")}
          </div>
        </div>
      </section>
    `;
  }).join("");

  noResults.hidden = matches > 0;
  setupSectionObserver();
}

function openDialog(html) {
  dialogContent.innerHTML = html;
  document.body.classList.add("dialog-open");
  detailDialog.showModal();
}

function closeDialog() {
  detailDialog.close();
  document.body.classList.remove("dialog-open");
}

function openEraProfile(eraId) {
  const index = eras.findIndex(item => item.id === eraId);
  const era = eras[index];
  const profile = eraProfiles[eraId];
  const previous = eras[index - 1];
  const next = eras[index + 1];

  openDialog(`
    <header class="detail-hero" style="--detail-color:${era.color}" data-ghost="${String(index + 1).padStart(2, "0")}">
      <p class="detail-type">Zoom històric · ${era.dates}</p>
      <h2 id="dialog-title">${era.name}</h2>
      <p class="detail-deck">${era.description}</p>
    </header>
    <div class="detail-body" style="--detail-color:${era.color}">
      <div class="context-grid">
        <section class="context-item"><span>01 · Societat</span><h3>Qui fa música?</h3><p>${profile.society}</p></section>
        <section class="context-item"><span>02 · Llenguatge</span><h3>Com sona?</h3><p>${profile.sound}</p></section>
        <section class="context-item"><span>03 · Innovació</span><h3>Què canvia?</h3><p>${profile.innovation}</p></section>
        <section class="context-item"><span>04 · Instruments</span><h3>La paleta</h3><p>${profile.instruments}</p></section>
        <section class="context-item"><span>05 · Llegat</span><h3>Què deixa?</h3><p>${profile.legacy}</p></section>
        <section class="context-item"><span>06 · Dates</span><h3>${era.dates}</h3><p>Les fronteres entre èpoques són orientatives: els estils se superposen i canvien a ritmes diferents segons el lloc.</p></section>
      </div>
      <div class="era-map" aria-label="Context cronològic">
        <div class="era-map-item">Abans<strong>${previous ? previous.name : "Tradició oral"}</strong></div>
        <div class="era-map-item current">Ara<strong>${era.name}</strong></div>
        <div class="era-map-item">Després<strong>${next ? next.name : "Història oberta"}</strong></div>
      </div>
      <section class="listening-block">
        <h3>Com escoltar aquesta època</h3>
        <p>${profile.listening}</p>
      </section>
      <a class="source-link" href="${profile.source}" target="_blank" rel="noopener noreferrer">Font de consulta històrica ↗</a>
    </div>
  `);
}

function openStyleProfile(style, eraId) {
  const era = eras.find(item => item.id === eraId);
  const profile = styleProfiles[style];
  if (!profile) return;

  openDialog(`
    <header class="detail-hero" style="--detail-color:${era.color}" data-ghost="≋">
      <p class="detail-type">Estil · ${era.name}</p>
      <h2 id="dialog-title">${style}</h2>
      <p class="detail-deck">Una clau per entendre el vocabulari sonor de l’època.</p>
    </header>
    <div class="detail-body" style="--detail-color:${era.color}">
      <p class="detail-label">Definició</p>
      <p class="style-definition">${profile[0]}</p>
      <div class="context-grid style-facts">
        <section class="context-item"><span>Escolta</span><h3>En què m’he de fixar?</h3><p>${profile[1]}</p></section>
        <section class="context-item"><span>Exemple</span><h3>Una porta d’entrada</h3><p>${profile[2]}</p></section>
        <section class="context-item"><span>Context</span><h3>${era.dates}</h3><p>${era.description}</p></section>
      </div>
      <a class="source-link" href="${eraProfiles[eraId].source}" target="_blank" rel="noopener noreferrer">Consulta la font del període ↗</a>
    </div>
  `);
}

function openComposerProfile(name, eraId) {
  const era = eras.find(item => item.id === eraId);
  const composer = era.composers.find(item => item.name === name);
  const profile = composerProfiles[name];
  if (!composer || !profile) return;
  const source = `https://www.britannica.com/search?query=${encodeURIComponent(name)}`;

  openDialog(`
    <header class="detail-hero" style="--detail-color:${era.color}" data-ghost="♪">
      <p class="detail-type">Compositor · ${era.name}</p>
      <h2 id="dialog-title">${name}</h2>
      <p class="detail-deck">${composer.years} · ${composer.style}</p>
    </header>
    <div class="detail-body" style="--detail-color:${era.color}">
      <div class="profile-grid">
        <aside>
          <div class="profile-stat"><span class="detail-label">Vida</span><strong>${composer.years}</strong></div>
          <div class="profile-stat"><span class="detail-label">Àmbit principal</span><strong>${composer.style}</strong></div>
          <div class="profile-stat"><span class="detail-label">Època</span><strong>${era.name}</strong></div>
        </aside>
        <p class="profile-copy">${profile[0]}</p>
      </div>
      <section class="profile-section">
        <p class="detail-label">Aportació</p>
        <h3>Per què és important?</h3>
        <p>${profile[1]}</p>
      </section>
      <section class="profile-section">
        <p class="detail-label">Obres principals</p>
        <h3>Comença a escoltar</h3>
        <div class="works-list">
          ${profile[2].map((work, index) => `
            <a class="work-link" href="${spotifyUrl(name, work)}" target="_blank" rel="noopener noreferrer">
              <span class="work-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="work-title">${work}</span>
              <span class="spotify-pill">Obre a Spotify ↗</span>
            </a>
          `).join("")}
        </div>
      </section>
      <a class="source-link" href="${source}" target="_blank" rel="noopener noreferrer">Contrasta la biografia a Encyclopaedia Britannica ↗</a>
    </div>
  `);
}

let sectionObserver;
function setupSectionObserver() {
  if (sectionObserver) sectionObserver.disconnect();
  const sections = document.querySelectorAll(".era");
  sectionObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    document.querySelectorAll(".era-link").forEach(link => {
      link.classList.toggle("active", link.dataset.era === visible.target.id);
    });
  }, { rootMargin: "-20% 0px -60%", threshold: [0, .1, .3] });
  sections.forEach(section => sectionObserver.observe(section));
}

search.addEventListener("input", event => renderTimeline(event.target.value));
clearSearch.addEventListener("click", () => {
  search.value = "";
  renderTimeline();
  search.focus();
});

timeline.addEventListener("click", event => {
  const eraButton = event.target.closest("[data-focus-era]");
  const styleButton = event.target.closest("[data-style]");
  const composerButton = event.target.closest("[data-composer]");
  if (eraButton) openEraProfile(eraButton.dataset.focusEra);
  if (styleButton) openStyleProfile(styleButton.dataset.style, styleButton.dataset.era);
  if (composerButton) openComposerProfile(composerButton.dataset.composer, composerButton.dataset.era);
});

dialogClose.addEventListener("click", closeDialog);
detailDialog.addEventListener("click", event => {
  if (event.target === detailDialog) closeDialog();
});
detailDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

renderNav();
renderTimeline();
