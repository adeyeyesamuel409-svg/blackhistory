/* ==========================================================================
   UNBROKEN — Independence Atlas data
   Country keys match the `properties.name` values in assets/data/africa.geojson.js
   Loaded as a plain script so it also works from the local filesystem.
   Every claim here is indexed in /SOURCES.md.
   ========================================================================== */
window.UnbrokenAfrica = {
  stats: [
    { value: "54", label: "independent African nations" },
    { value: "17", label: "became independent in 1960 alone" },
    { value: "1847", label: "Africa's oldest republic — Liberia" },
    { value: "2011", label: "world's youngest nation — South Sudan" }
  ],
  buckets: [
    { label: "Independent by 1950", min: 0, max: 1950, color: "#f3e5ab" },
    { label: "1951\u20131959", min: 1951, max: 1959, color: "#e6c667" },
    { label: "1960 \u00b7 Year of Africa", min: 1960, max: 1960, color: "#d99a2b" },
    { label: "1961\u20131969", min: 1961, max: 1969, color: "#c07a25" },
    { label: "1970\u20131979", min: 1970, max: 1979, color: "#9c6330" },
    { label: "1980\u20131989", min: 1980, max: 1989, color: "#6f7a4a" },
    { label: "1990\u20131999", min: 1990, max: 1999, color: "#3f8a72" },
    { label: "2000\u2013present", min: 2000, max: 9999, color: "#1f6f7a" }
  ],
  countries: {
    "Algeria": { display: "Algeria", year: 1962, former: "France", note: "Independence after an eight-year war (1954\u201362)." },
    "Angola": { display: "Angola", year: 1975, former: "Portugal", note: "After the 1961\u201374 liberation war." },
    "Benin": { display: "Benin", year: 1960, former: "France", note: "Formerly Dahomey." },
    "Botswana": { display: "Botswana", year: 1966, former: "United Kingdom" },
    "Burkina Faso": { display: "Burkina Faso", year: 1960, former: "France", note: "Formerly Upper Volta." },
    "Burundi": { display: "Burundi", year: 1962, former: "Belgium" },
    "Cameroon": { display: "Cameroon", year: 1960, former: "France / UK (UN trust)" },
    "Cape Verde": { display: "Cape Verde", year: 1975, former: "Portugal" },
    "Central African Republic": { display: "Central African Republic", year: 1960, former: "France" },
    "Chad": { display: "Chad", year: 1960, former: "France" },
    "Comoros": { display: "Comoros", year: 1975, former: "France" },
    "Congo": { display: "Republic of the Congo", year: 1960, former: "France" },
    "DR Congo": { display: "DR Congo", year: 1960, former: "Belgium", note: "Patrice Lumumba was assassinated within months." },
    "Djibouti": { display: "Djibouti", year: 1977, former: "France" },
    "Egypt": { display: "Egypt", year: 1922, former: "United Kingdom", note: "Nominal independence 1922; full sovereignty 1952\u201356." },
    "Equatorial Guinea": { display: "Equatorial Guinea", year: 1968, former: "Spain" },
    "Eritrea": { display: "Eritrea", year: 1993, former: "Ethiopia (Italian colony to 1941)", note: "Independent after a 30-year war." },
    "Ethiopia": { display: "Ethiopia", year: null, label: "Never colonised", former: "\u2014", note: "Defeated Italy at Adwa (1896); briefly occupied 1936\u201341." },
    "Gabon": { display: "Gabon", year: 1960, former: "France" },
    "Gambia": { display: "Gambia", year: 1965, former: "United Kingdom" },
    "Ghana": { display: "Ghana", year: 1957, former: "United Kingdom", note: "First sub-Saharan colony to win independence." },
    "Guinea": { display: "Guinea", year: 1958, former: "France", note: "Rejected the 1958 French Community by referendum." },
    "Guinea-Bissau": { display: "Guinea-Bissau", year: 1973, former: "Portugal", note: "Declared 1973; recognised 1974." },
    "Ivory Coast": { display: "C\u00f4te d'Ivoire", year: 1960, former: "France" },
    "Kenya": { display: "Kenya", year: 1963, former: "United Kingdom", note: "The Mau Mau uprising (1952\u201360) preceded independence." },
    "Lesotho": { display: "Lesotho", year: 1966, former: "United Kingdom" },
    "Liberia": { display: "Liberia", year: 1847, former: "American Colonization Society", note: "Africa's oldest republic." },
    "Libya": { display: "Libya", year: 1951, former: "Italy / UN", note: "First African state independent after WWII." },
    "Madagascar": { display: "Madagascar", year: 1960, former: "France", note: "The 1947 uprising preceded independence." },
    "Malawi": { display: "Malawi", year: 1964, former: "United Kingdom" },
    "Mali": { display: "Mali", year: 1960, former: "France", note: "Federation with Senegal dissolved weeks later." },
    "Mauritania": { display: "Mauritania", year: 1960, former: "France" },
    "Mauritius": { display: "Mauritius", year: 1968, former: "United Kingdom" },
    "Morocco": { display: "Morocco", year: 1956, former: "France / Spain" },
    "Mozambique": { display: "Mozambique", year: 1975, former: "Portugal", note: "After a decade-long liberation war." },
    "Namibia": { display: "Namibia", year: 1990, former: "South Africa", note: "Formerly German South West Africa." },
    "Niger": { display: "Niger", year: 1960, former: "France" },
    "Nigeria": { display: "Nigeria", year: 1960, former: "United Kingdom" },
    "Rwanda": { display: "Rwanda", year: 1962, former: "Belgium" },
    "Sao Tome and Principe": { display: "S\u00e3o Tom\u00e9 and Pr\u00edncipe", year: 1975, former: "Portugal" },
    "Senegal": { display: "Senegal", year: 1960, former: "France" },
    "Seychelles": { display: "Seychelles", year: 1976, former: "United Kingdom" },
    "Sierra Leone": { display: "Sierra Leone", year: 1961, former: "United Kingdom" },
    "Somalia": { display: "Somalia", year: 1960, former: "Italy / UK (UN trust)", note: "British and Italian Somaliland united." },
    "South Africa": { display: "South Africa", year: 1910, former: "United Kingdom", note: "Self-governing dominion from 1910; democracy in 1994." },
    "South Sudan": { display: "South Sudan", year: 2011, former: "Sudan", note: "The world's youngest nation." },
    "Sudan": { display: "Sudan", year: 1956, former: "United Kingdom / Egypt" },
    "Swaziland": { display: "Eswatini (Swaziland)", year: 1968, former: "United Kingdom" },
    "Tanzania": { display: "Tanzania", year: 1961, former: "United Kingdom", note: "Tanganyika 1961; union with Zanzibar in 1964." },
    "Togo": { display: "Togo", year: 1960, former: "Germany / France (UN trust)" },
    "Tunisia": { display: "Tunisia", year: 1956, former: "France" },
    "Uganda": { display: "Uganda", year: 1962, former: "United Kingdom" },
    "Zambia": { display: "Zambia", year: 1964, former: "United Kingdom" },
    "Zimbabwe": { display: "Zimbabwe", year: 1980, former: "United Kingdom", note: "After the liberation struggle and Lancaster House agreement." }
  },
  nonMembers: {
    "Western Sahara": { display: "Western Sahara", year: null, label: "Disputed", former: "Spain \u2192 Morocco", note: "A non-self-governing territory; largely controlled by Morocco." },
    "La Reunion": { display: "R\u00e9union", year: null, label: "French territory", former: "France", note: "An overseas department of France, not an independent state." }
  }
};
