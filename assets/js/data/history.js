/* ==========================================================================
   UNBROKEN — Volume I content data
   Loaded as a plain script so it also works when the site is opened from
   the local filesystem (no fetch/CORS restrictions).
   Every claim here is indexed in /SOURCES.md.
   ========================================================================== */
window.UnbrokenData = (function () {
  "use strict";

  /* ---- Deep-time timeline ------------------------------------------------ */
  const timeline = [
    {
      id: "genesis",
      range: "c. 300,000 – 60,000 BCE",
      title: "Deep Genesis: the first humans",
      blurb:
        "The oldest known fossils of Homo sapiens are African. Jebel Irhoud in Morocco and Omo Kibish in Ethiopia show that our species emerged, and was already spreading, across the continent long before anywhere else.",
      highlights: [
        "Jebel Irhoud (Morocco), c. 315,000 years ago — earliest known H. sapiens fossils",
        "Omo Kibish (Ethiopia), c. 233,000 years ago",
        "Herto (Ethiopia), c. 160,000 years ago — early ritual treatment of the dead"
      ],
      accent: "#c5a059"
    },
    {
      id: "outofafrica",
      range: "c. 120,000 – 50,000 BCE",
      title: "Out of Africa",
      blurb:
        "African populations dispersed in waves. An early wave reached the Levant around 120,000 years ago; the major dispersal that peopled the rest of the world left north-east Africa roughly 60,000–70,000 years ago, moving along coastlines and river valleys.",
      highlights: [
        "Misliya Cave (Israel), c. 180,000 years ago — earliest H. sapiens outside Africa",
        "Bab-el-Mandeb strait — the southern coastal crossing",
        "By c. 65,000 years ago humans reached Australia (Madjedbebe, Lake Mungo)"
      ],
      accent: "#b4552d"
    },
    {
      id: "greensahara",
      range: "c. 11,000 – 5,000 BCE",
      title: "Green Sahara & early communities",
      blurb:
        "During the African Humid Period the Sahara was grassland and lakes. Across it, communities herded cattle, fished, and left tens of thousands of rock-art images — one of the world's great prehistoric archives.",
      highlights: [
        "Cattle domestication in the eastern Sahara by c. 9,000–8,000 BCE",
        "Sahara rock art: Tassili n'Ajjer (Algeria), Ennedi (Chad), Gilf Kebir (Egypt)",
        "Dufuna canoe (Nigeria), c. 8,000 BCE — among the oldest boats found anywhere"
      ],
      accent: "#4f7a54"
    },
    {
      id: "kemet",
      range: "c. 3100 BCE – 30 BCE",
      title: "Kemet & Nubia: the river civilizations",
      blurb:
        "Along the Nile, indigenous African states built the first large-scale stone monuments on Earth. Kemet (Egypt) and its southern neighbour Kush (Nubia) produced writing, medicine, mathematics, and astronomy, and traded as far as the Mediterranean and the Red Sea.",
      highlights: [
        "The Great Pyramid of Khufu at Giza, c. 2560 BCE",
        "Nubia's Kingdom of Kush and the pyramids of Meroë",
        "Kushite pharaohs of the 25th Dynasty ruled Egypt c. 744–656 BCE"
      ],
      accent: "#c5a059"
    },
    {
      id: "ironstates",
      range: "c. 500 BCE – 500 CE",
      title: "Iron, cities & early states",
      blurb:
        "Ironworking and long-distance trade transformed the continent. West Africa's Nok culture produced terracottas; in the Horn, Aksum minted its own coinage and became one of the great trading powers of the ancient world.",
      highlights: [
        "Nok culture (Nigeria), c. 1500 BCE – 500 CE",
        "Aksum adopts Christianity in the 4th century CE",
        "Early urban centres along the Niger and the Swahili coast"
      ],
      accent: "#3b4a7a"
    },
    {
      id: "goldenkingdoms",
      range: "c. 500 – 1500 CE",
      title: "Golden kingdoms",
      blurb:
        "African states controlled the world's richest trade routes. Ghana, Mali, and Songhai commanded Trans-Saharan gold and salt; Great Zimbabwe and the Swahili coast linked the interior to Arabia, Persia, India, and China.",
      highlights: [
        "Timbuktu and Djenné — centres of learning and trade",
        "Mansa Musa of Mali (r. c. 1312–1337)",
        "Great Zimbabwe's dry-stone walls (c. 1100–1450 CE)"
      ],
      accent: "#c5a059"
    },
    {
      id: "interruption",
      range: "c. 1440 – 1884 CE",
      title: "The interruption",
      blurb:
        "European maritime expansion turned African and Mediterranean slave trades into the largest forced migration in history, then culminated in the partition of the continent at the Berlin Conference of 1884–85. Resistance was constant.",
      highlights: [
        "Transatlantic slave trade begins in the 15th–16th centuries",
        "Songhai defeated at Tondibi, 1591",
        "Berlin Conference carves up Africa, 1884–85"
      ],
      accent: "#b4552d"
    },
    {
      id: "reawakening",
      range: "1885 CE – present",
      title: "Reawakening",
      blurb:
        "From anti-colonial wars to independence and a global diaspora, the African world has reclaimed its place. Its influence on music, mathematics, fashion, and food continues to shape the planet.",
      highlights: [
        "Ethiopia defeats Italy at Adwa, 1896",
        "Ghana becomes the first sub-Saharan African nation to gain independence, 1957",
        "Today over 1.4 billion people across the continent and diaspora"
      ],
      accent: "#f3e5ab"
    }
  ];

  /* ---- Out of Africa: sites & routes (Leaflet [lat, lng]) ---------------- */
  const migration = {
    sites: [
      { name: "Jebel Irhoud, Morocco", lat: 31.85, lng: -8.87, when: "c. 315,000 yrs", note: "Earliest known Homo sapiens fossils." },
      { name: "Omo Kibish, Ethiopia", lat: 4.8, lng: 35.9, when: "c. 233,000 yrs", note: "Earliest anatomically modern fossil in East Africa." },
      { name: "Herto, Ethiopia", lat: 10.25, lng: 40.5, when: "c. 160,000 yrs", note: "Early modern humans with mortuary practices." },
      { name: "Blombos Cave, South Africa", lat: -34.4, lng: 21.2, when: "c. 100,000 yrs", note: "Earliest known pigment use and symbolic drawing." },
      { name: "Pinnacle Point, South Africa", lat: -34.2, lng: 22.1, when: "c. 164,000 yrs", note: "Early coastal diet and tool use." },
      { name: "Misliya Cave, Israel", lat: 32.75, lng: 35.0, when: "c. 180,000 yrs", note: "Earliest H. sapiens outside Africa." },
      { name: "Madjedbebe, Australia", lat: -12.5, lng: 132.9, when: "c. 65,000 yrs", note: "One of the earliest sites of human arrival in Australia." }
    ],
    routes: [
      {
        id: "northern",
        name: "Northern wave (Levant)",
        era: 1,
        color: "#e0bd6a",
        points: [[4.8, 35.9], [10.25, 40.5], [15.0, 39.0], [24.0, 34.5], [30.0, 33.0], [32.5, 35.0]]
      },
      {
        id: "southern",
        name: "Southern coastal wave",
        era: 1,
        color: "#b4552d",
        points: [[7.0, 38.0], [11.5, 43.0], [13.5, 44.0], [18.0, 55.0], [22.0, 68.0], [10.0, 78.0], [2.0, 102.0], [-8.0, 120.0], [-25.0, 134.0]]
      },
      {
        id: "europe",
        name: "Into Europe",
        era: 2,
        color: "#8fa6d8",
        points: [[32.5, 35.0], [41.0, 29.0], [45.0, 12.0], [50.0, 5.0], [52.0, 8.0]]
      },
      {
        id: "asia",
        name: "Across Asia",
        era: 2,
        color: "#8fa6d8",
        points: [[22.0, 68.0], [35.0, 90.0], [45.0, 110.0], [55.0, 90.0]]
      },
      {
        id: "americas",
        name: "Into the Americas",
        era: 3,
        color: "#4f7a54",
        points: [[65.0, -170.0], [60.0, -150.0], [45.0, -110.0], [20.0, -100.0], [-15.0, -70.0], [-40.0, -70.0]]
      }
    ]
  };

  /* ---- Kemet & Nubia: pyramid engineering -------------------------------- */
  const kemet = {
    pyramid: {
      name: "Great Pyramid of Khufu, Giza",
      date: "c. 2560 BCE",
      blocks: "≈ 2.3 million blocks",
      height: "146.6 m (481 ft) when built",
      note: "Built from local limestone with granite for internal chambers, transported from Aswan by river and sledge."
    },
    engineering: [
      {
        title: "Water-lubricated sledges",
        body: "Egyptians moved large stone blocks on wooden sledges. Tomb art for the official Djehutihotep (c. 1880 BCE) shows a worker pouring water ahead of a sledge. Experiments in 2014 showed that wet sand can roughly halve the pulling force required."
      },
      {
        title: "Straight ramps & causeways",
        body: "Archaeology at Giza has uncovered ramps and a logistically organised supply system. Papyri from Wadi al-Jarf record a boat crew hauling limestone for the pyramid — evidence of state logistics, not mystery."
      },
      {
        title: "Astronomical alignment",
        body: "The Great Pyramid's sides are aligned to true north to within a fraction of a degree, achieved by observing circumpolar stars — a feat of indigenous African astronomy and surveying."
      },
      {
        title: "Organised, paid labour",
        body: "Excavation of the Giza workers' village (Mark Lehner's Giza Plateau Mapping Project) shows bakeries, breweries, dormitories, and medical care — evidence that the builders were a supplied workforce, not enslaved people."
      }
    ],
    nubia: "South of Egypt, the Kingdom of Kush built its own pyramids — about 200 at Meroë alone. Kushite kings ruled Egypt as the 25th Dynasty (c. 744–656 BCE), reviving temple building and pyramid construction."
  };

  /* ---- Pre-colonial empires ---------------------------------------------- */
  const empires = [
    { id: "kush", name: "Kingdom of Kush / Meroë", lat: 16.94, lng: 33.75, radius: 380000, period: "c. 1070 BCE – 350 CE", blurb: "Nubian kingdom on the Nile; capital later at Meroë. Ruler of Egypt as the 25th Dynasty and home to ~200 pyramids." },
    { id: "aksum", name: "Kingdom of Aksum", lat: 14.13, lng: 38.72, radius: 300000, period: "c. 100 – 940 CE", blurb: "Horn of Africa trading empire; minted its own coins, adopted Christianity in the 4th century CE, and controlled Red Sea trade." },
    { id: "ghana", name: "Ghana Empire", lat: 15.5, lng: -8.0, radius: 350000, period: "c. 300 – 1200 CE", blurb: "First great West African empire of gold and salt, centred on Koumbi Saleh at the edge of the Sahara." },
    { id: "mali", name: "Mali Empire", lat: 13.0, lng: -5.0, radius: 520000, period: "1235 – 1670 CE", blurb: "Mansa Musa's empire of gold whose scholars made Timbuktu and Djenné centres of learning reaching the Mediterranean." },
    { id: "songhai", name: "Songhai Empire", lat: 16.7, lng: -3.0, radius: 520000, period: "1464 – 1591 CE", blurb: "Largest state in West African history, centred on Gao; a major centre of scholarship until defeated at Tondibi in 1591." },
    { id: "zimbabwe", name: "Great Zimbabwe", lat: -20.27, lng: 30.93, radius: 220000, period: "c. 1100 – 1450 CE", blurb: "Mortarless granite walls up to 11 m tall; a gold-and-ivory trading state linked to the Swahili coast and beyond." },
    { id: "benin", name: "Kingdom of Benin", lat: 6.34, lng: 5.62, radius: 180000, period: "c. 1180 – 1897 CE", blurb: "West African kingdom famed for the Benin Bronzes, extensive earthworks, and a sophisticated royal administration." },
    { id: "kongo", name: "Kingdom of Kongo", lat: -6.0, lng: 14.0, radius: 260000, period: "c. 1390 – 1914 CE", blurb: "Powerful Central African state with a complex government, later devastated by the transatlantic slave trade." }
  ];

  /* ---- Hair & attire ----------------------------------------------------- */
  const hair = [
    { id: "fulani", title: "Fulani Braids & Beads", origin: "Fulani — West Africa", desc: "Long side braids with a central crown, adorned with cowrie shells, amber, and silver to signal lineage and status.", builder: "fulani" },
    { id: "amasunzu", title: "Amasunzu", origin: "Rwanda — East Africa", desc: "Sculpted crescent crests historically worn by Rwandan men and women to mark status, age, and dignity.", builder: "amasunzu" },
    { id: "bantu", title: "Bantu Knots", origin: "Bantu peoples — Central & Southern Africa", desc: "Sectioned twists coiled into raised knots, a protective style with deep regional roots.", builder: "bantu" },
    { id: "himba", title: "Himba Ochre Crown", origin: "Himba — Namibia", desc: "Hair coated in otjize, a paste of butterfat and red ochre, tied to the earth's colour and beauty ideals.", builder: "himba" }
  ];

  const attire = [
    { id: "kente", title: "Kente", origin: "Asante & Ewe — Ghana", desc: "Hand-woven silk-and-cotton cloth in geometric patterns, each motif carrying a proverb or royal meaning." },
    { id: "bogolan", title: "Bogolanfini", origin: "Bamana — Mali", desc: "Mud-cloth dyed with fermented mud over hand-spun cotton, its symbols recording history and status." },
    { id: "kanga", title: "Kanga & Kitenge", origin: "Swahili Coast — East Africa", desc: "Printed cottons with a border and a proverb, worn in pairs and central to coastal Swahili dress." },
    { id: "mola", title: "Mola", origin: "Guna — Panama", desc: "Reverse-appliqué textile panels, part of a blouse, made by Guna women of Central America." }
  ];

  /* ---- Sources index ----------------------------------------------------- */
  const sources = [
    { id: "hublin2017", label: "Hublin et al., 'New fossils from Jebel Irhoud, Morocco', Nature (2017)" },
    { id: "mcdougall2005", label: "McDougall et al., 'Stratigraphic placement and age of modern humans from Kibish, Ethiopia', Nature (2005)" },
    { id: "herskovitz2018", label: "Hershkovitz et al., 'The earliest modern humans outside Africa', Science (2018)" },
    { id: "clarkson2017", label: "Clarkson et al., 'Human occupation of northern Australia', Nature (2017)" },
    { id: "lehrer2014", label: "Lehner, 'The Giza Plateau Mapping Project' — workers' village evidence" },
    { id: "tallet2017", label: "Tallet, 'Les papyrus de la mer Rouge' — Wadi al-Jarf logbook" },
    { id: "fall2014", label: "Fall et al., 'Sliding friction on wet and dry sand', Physical Review Letters (2014)" },
    { id: "unesco", label: "UNESCO World Heritage List — Meroë, Aksum, Great Zimbabwe, Timbuktu, Koumbi Saleh" },
    { id: "met", label: "The Metropolitan Museum of Art — Ancient Egypt & Nubia collections" },
    { id: "british", label: "The British Museum — Benin Bronzes and African collections" },
    { id: "nok", label: "Smithsonian National Museum of African Art — Nok, Kongo, Benin holdings" }
  ];

  return { timeline, migration, kemet, empires, hair, attire, sources };
})();
