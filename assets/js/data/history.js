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
    { id: "fulani", title: "Fulani Braids & Beads", origin: "Fulani — West Africa", desc: "Long side braids with a central crown, adorned with cowrie shells, amber, and silver to signal lineage and status.", builder: "fulani",
      sources: "Recorded in A. Raffenel, Voyage dans l'Afrique occidentale (1843–44) and in 1887 Peul studio photographs from Senegal (Bonnevide/Hostalier); surveyed in Sieber & Herreman, Hair in African Art and Culture (2000)." },
    { id: "amasunzu", title: "Amasunzu", origin: "Rwanda — East Africa", desc: "Sculpted crescent crests historically worn by Rwandan men and women to mark status, age, and dignity.", builder: "amasunzu",
      sources: "Documented in early Rwandan photography (e.g. King Yuhi V Musinga, 1910s; Zagourski, 1929–37) and surveyed in Sieber & Herreman, Hair in African Art and Culture (2000)." },
    { id: "bantu", title: "Bantu Knots", origin: "Bantu peoples — Central & Southern Africa", desc: "Sectioned twists coiled into raised knots, a protective style with deep regional roots.", builder: "bantu",
      sources: "The modern term covers sectioned coils and woven styles recorded in Congo mission photographs (c.1900–1915) and Buchta's Mangbetu images (1877–80); cf. Sieber & Herreman (2000)." },
    { id: "himba", title: "Himba Ochre Crown", origin: "Himba — Namibia", desc: "Hair coated in otjize, a paste of butterfat and red ochre, tied to the earth's colour and beauty ideals.", builder: "himba",
      sources: "The otjize butterfat-and-ochre paste is documented in ethnographic photographs of the Himba of north-west Namibia (e.g. Stieglitz; Gracia, 2007)." }
  ];

  const attire = [
    { id: "kente", title: "Kente", origin: "Asante & Ewe — Ghana", desc: "Hand-woven silk-and-cotton cloth in geometric patterns, each motif carrying a proverb or royal meaning." },
    { id: "bogolan", title: "Bogolanfini", origin: "Bamana — Mali", desc: "Mud-cloth dyed with fermented mud over hand-spun cotton, its symbols recording history and status." },
    { id: "kanga", title: "Kanga & Kitenge", origin: "Swahili Coast — East Africa", desc: "Printed cottons with a border and a proverb, worn in pairs and central to coastal Swahili dress." },
    { id: "mola", title: "Mola", origin: "Guna — Panama", desc: "Reverse-appliqué textile panels, part of a blouse, made by Guna women of Central America." }
  ];

  /* ---- Volume II: Trade networks ----------------------------------------- */
  const trade = {
    networks: [
      {
        id: "transsaharan",
        name: "Trans-Saharan trade",
        era: "c. 300 CE onward",
        blurb: "Camel caravans linked West African goldfields to the Mediterranean and Egypt, carrying salt north-to-south and gold, ivory and enslaved people south-to-north. Timbuktu, Gao and Kano grew into great market cities.",
        goods: ["Gold", "Salt", "Copper", "Textiles", "Horses", "Books & paper"]
      },
      {
        id: "indianocean",
        name: "Indian Ocean & Swahili coast",
        era: "c. 1st millennium CE onward",
        blurb: "Monsoon winds powered a trade that tied the Swahili city-states — Kilwa, Mombasa, Malindi, Sofala — to Arabia, Persia, India and China. Gold and ivory went out; ceramics, glass and cloth came in.",
        goods: ["Gold", "Ivory", "Timber", "Porcelain", "Glass", "Spices"]
      },
      {
        id: "intra",
        name: "Intra-African trade",
        era: "continuous",
        blurb: "Long before outside contact, African regions traded with each other: salt from the Sahara, copper from Katanga, kola nut in West Africa, and cloth and iron across the continent.",
        goods: ["Salt", "Copper crosses", "Kola nut", "Iron", "Cloth"]
      }
    ],
    hubs: [
      { name: "Timbuktu", lat: 16.77, lng: -3.01, note: "Trans-Saharan gold, salt and scholarship." },
      { name: "Gao", lat: 16.27, lng: -0.05, note: "Songhai capital on the Niger." },
      { name: "Kano", lat: 12.0, lng: 8.52, note: "Sahelian terminus of desert caravans." },
      { name: "Sijilmasa", lat: 31.28, lng: -4.28, note: "Northern Saharan gateway." },
      { name: "Kilwa Kisiwani", lat: -8.94, lng: 39.51, note: "Swahili gold port linked to Great Zimbabwe." },
      { name: "Sofala", lat: -20.17, lng: 34.73, note: "Port for interior gold." },
      { name: "Adulis", lat: 15.26, lng: 39.66, note: "Red Sea port of Aksum." }
    ],
    routes: [
      { id: "ts1", system: "transsaharan", color: "#e0bd6a", points: [[16.77, -3.01], [22.0, -3.5], [31.28, -4.28], [31.63, -7.99]] },
      { id: "ts2", system: "transsaharan", color: "#e0bd6a", points: [[12.0, 8.52], [17.0, 8.0], [30.13, 9.5], [32.9, 13.19]] },
      { id: "ts3", system: "transsaharan", color: "#e0bd6a", points: [[16.27, -0.05], [22.0, 5.0], [30.05, 31.24]] },
      { id: "io1", system: "indianocean", color: "#8fa6d8", points: [[-20.17, 34.73], [-8.94, 39.51], [-6.16, 39.2], [23.6, 58.5]] },
      { id: "io2", system: "indianocean", color: "#8fa6d8", points: [[-6.16, 39.2], [12.5, 45.0], [20.0, 70.0], [8.5, 76.9]] },
      { id: "io3", system: "indianocean", color: "#8fa6d8", points: [[15.26, 39.66], [23.0, 38.0], [30.0, 32.5]] }
    ]
  };

  /* ---- Volume II: The slave trades --------------------------------------- */
  const slavery = {
    systems: [
      { name: "Trans-Saharan", period: "Antiquity – 20th c.", note: "Enslaved people crossed the Sahara to North Africa and the Mediterranean, alongside the gold and salt caravans." },
      { name: "Indian Ocean & Red Sea", period: "Antiquity – 20th c.", note: "From East African ports to Arabia, Persia and India — a trade over a thousand years older than the Atlantic one." },
      { name: "Transatlantic", period: "c. 1525 – 1866", note: "The largest forced maritime migration in history, driven by European demand for plantation labour in the Americas." },
      { name: "Intra-African", period: "continuous", note: "Slavery and the enslaving of war captives existed within and between African societies long before and during outside contact." }
    ],
    stats: [
      { value: "12.5m", label: "Africans embarked across the Atlantic" },
      { value: "10.7m", label: "Survived the crossing (Slave Voyages)" },
      { value: "~1,300 yrs", label: "Span of the Trans-Saharan trade" },
      { value: "1807", label: "Britain abolishes the slave trade" }
    ],
    timeline: [
      { year: "9th c.", event: "Trans-Saharan trade at its height; African and Arab merchants move gold, salt and enslaved people." },
      { year: "1441", event: "Portuguese ships carry the first enslaved Africans to Europe, beginning the Atlantic trade." },
      { year: "1525", event: "Large-scale transatlantic voyages to the Americas begin in earnest." },
      { year: "1791", event: "The Haitian Revolution begins — the only successful large-scale slave revolt to found a state." },
      { year: "1807", event: "Britain abolishes its slave trade; the Royal Navy begins interception at sea." },
      { year: "1839", event: "The Amistad revolt: enslaved Mende Africans seize their ship and win freedom in court." },
      { year: "1865", event: "The 13th Amendment ends slavery in the United States." },
      { year: "1888", event: "Brazil, the last country in the Americas, abolishes slavery." }
    ],
    resistance: [
      { title: "Shipboard revolts", note: "Resistance began on the water: the Amistad (1839) and hundreds of smaller revolts." },
      { title: "Maroon communities", note: "Escaped people built free settlements across the Americas, from Jamaica to Brazil." },
      { title: "Revolution", note: "Haiti (1791–1804) abolished slavery and won independence — a blow that reshaped the Atlantic world." }
    ],
    nuance: "This history is often flattened into a single story. In reality four distinct trades spanned more than a thousand years; African states and merchants were active participants as well as victims; and European demand reshaped the scale and direction of the trade from the 15th century. States such as Kongo were devastated by it. The enslaved were not passive: they resisted at every stage — in Africa, on the ships, and in the Americas.",
    routes: [
      { id: "atl1", system: "transatlantic", color: "#b4552d", points: [[6.0, 3.0], [-8.0, 13.0], [-20.0, 30.0], [-15.0, -60.0], [18.0, -72.0]] },
      { id: "atl2", system: "transatlantic", color: "#b4552d", points: [[-8.0, 13.0], [-25.0, 10.0], [-10.0, -35.0], [25.0, -80.0], [37.0, -76.0]] },
      { id: "tsh1", system: "transsaharan", color: "#e0bd6a", points: [[15.0, 7.0], [22.0, 4.0], [30.0, 9.0], [32.9, 13.19]] },
      { id: "io1", system: "indianocean", color: "#8fa6d8", points: [[-6.16, 39.2], [-8.94, 39.51], [12.5, 45.0], [23.6, 58.5]] }
    ]
  };

  /* ---- Volume III: Colonialism & independence ---------------------------- */
  const colonial = {
    stats: [
      { value: "1884–85", label: "Berlin Conference partitions Africa" },
      { value: "1896", label: "Ethiopia defeats Italy at Adwa" },
      { value: "1960", label: "17 nations gain independence" },
      { value: "1994", label: "End of apartheid in South Africa" }
    ],
    berlin:
      "At the Berlin Conference of 1884–85, European powers — and the United States as an observer — drew rules for dividing Africa among themselves. No African ruler was invited. Within a generation, almost the entire continent was under colonial rule. The delegates' straight-line borders cut across African polities and peoples, creating fault lines that still shape the continent today.",
    resistance: [
      { name: "Battle of Adwa", lat: 14.13, lng: 38.72, year: "1896", country: "Ethiopia", note: "Menelik II and Empress Taytu defeat an invading Italian army, keeping Ethiopia independent." },
      { name: "Isandlwana", lat: -28.35, lng: 30.65, year: "1879", country: "Zululand", note: "Zulu forces under Cetshwayo rout a British column — a shock to the empire." },
      { name: "War of the Golden Stool", lat: 6.7, lng: -1.6, year: "1900", country: "Asante", note: "Yaa Asantewaa leads the Asante resistance against British annexation." },
      { name: "Herero & Namaqua", lat: -22.0, lng: 17.0, year: "1904–08", country: "Namibia", note: "German forces commit genocide against the Herero and Nama peoples." },
      { name: "Maji Maji Rebellion", lat: -8.9, lng: 37.0, year: "1905–07", country: "German East Africa", note: "Uprising against forced cotton labour and brutal colonial rule." },
      { name: "Mau Mau", lat: -0.4, lng: 37.0, year: "1952–60", country: "Kenya", note: "Guerrilla uprising against British rule and land seizure, crushed with mass detention." }
    ],
    independence: [
      { country: "Liberia", year: "1847" },
      { country: "Ethiopia", year: "never colonised" },
      { country: "Libya", year: "1951" },
      { country: "Sudan", year: "1956" },
      { country: "Morocco & Tunisia", year: "1956" },
      { country: "Ghana", year: "1957" },
      { country: "Guinea", year: "1958" },
      { country: "17 nations", year: "1960" },
      { country: "Algeria", year: "1962" },
      { country: "Kenya", year: "1963" },
      { country: "Zimbabwe", year: "1980" },
      { country: "Namibia", year: "1990" },
      { country: "Eritrea", year: "1993" },
      { country: "South Africa", year: "1994" }
    ],
    legacy:
      "Independence did not undo colonial economics. Borders still split communities, and many economies were built to export raw materials and import manufactures. Yet the same decades produced pan-Africanism, the Organisation of African Unity (1963, later the African Union), and cultural movements that reshaped the world. The story of the twentieth century is also one of African nations making their own history."
  };

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

  return { timeline, migration, kemet, empires, hair, attire, trade, slavery, colonial, sources };
})();
