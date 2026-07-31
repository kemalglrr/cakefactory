const U = (id) =>
  `https://images.unsplash.com/${id}?q=80&w=700&auto=format&fit=crop`;

export const CATEGORIES = [
  {
    id: "firin",
    icon: "croissant",
    name: "Fırından",
    sub: "Her sabah taze, doğal tereyağı ile",
    items: [
      { n: "Tereyağlı Kruvasan", d: "48 saat dinlendirilmiş hamur, bol katlı", p: "95 ₺", img: U("photo-1555507036-ab1f4038808a"), badge: "Çok Satan" },
      { n: "Tatlı Kruvasan", d: "Krema dolgulu, yanında Belçika çikolata sosu", p: "145 ₺", img: U("photo-1517433670267-08bbd4be890f") },
      { n: "Ekşi Mayalı Köy Ekmeği", d: "Ata tohumu unu, taş fırında pişirim", p: "120 ₺", img: U("photo-1549931319-a545dcf3bc73"), badge: "Ata Tohumu" },
      { n: "Zeytinli Açma", d: "Ege zeytini, doğal tereyağı", p: "70 ₺", img: U("photo-1509440159596-0249088772ff") },
      { n: "Simit & Poğaça", d: "Günlük taze, tam buğday seçeneği", p: "60 ₺", img: U("photo-1509440159596-0249088772ff") },
      { n: "San Sebastian Dilim", d: "Yanık cheesecake, günlük üretim", p: "180 ₺", img: U("photo-1551024506-0bccd828d307") },
    ],
  },
  {
    id: "tatli",
    icon: "cake",
    name: "Tatlılar",
    sub: "Belçika çikolatası ve doğal krema ile",
    items: [
      { n: "Lava Cake", d: "Belçika çikolatası, mevsim meyveleri ile", p: "195 ₺", img: U("photo-1578985545062-69928b1d9587"), badge: "Şefin Önerisi" },
      { n: "Lotus Cheesecake", d: "Hafif dokulu, lotus sosu yanında servis", p: "165 ₺", img: U("photo-1488477181946-6428a0291777"), badge: "Çok Satan" },
      { n: "Chocolate Crumble", d: "Belçika çikolatası, kıtır taban", p: "175 ₺", img: U("photo-1551024506-0bccd828d307") },
      { n: "Frambuazlı Pasta Dilim", d: "Taze frambuaz, doğal krema", p: "160 ₺", img: U("photo-1565958011703-44f9829ba187") },
      { n: "Brownie", d: "Yoğun çikolata, ceviz içi", p: "140 ₺", img: U("photo-1606313564200-e75d5e30476c") },
      { n: "Gingerbread Kurabiye (2 adet)", d: "Tarçınlı, el yapımı", p: "70 ₺", img: U("photo-1499636136210-6f4ee915583e") },
    ],
  },
  {
    id: "kahvalti",
    icon: "utensils",
    name: "Kahvaltı",
    sub: "Köy ürünleriyle, gün boyu",
    items: [
      { n: "Serpme Kahvaltı (2 kişilik)", d: "Köy tereyağı, ev reçelleri, taze fırın sepeti", p: "650 ₺", img: U("photo-1533089860892-a7c6f0a88666"), badge: "2 Kişilik" },
      { n: "Menemen", d: "Köy yumurtası, çiftlik domatesi", p: "160 ₺", img: U("photo-1525351484163-7529414344d8") },
      { n: "Avokadolu Tost", d: "Ekşi mayalı ekmek üzerinde, poşe yumurta", p: "210 ₺", img: U("photo-1541519227354-08fa5d50c44d") },
      { n: "Sahanda Yumurta", d: "Köy yumurtası, tereyağında", p: "120 ₺", img: U("photo-1525351484163-7529414344d8") },
    ],
  },
  {
    id: "icecek",
    icon: "coffee",
    name: "Kahve & İçecek",
    sub: "Günün taze çekirdeği",
    items: [
      { n: "Türk Kahvesi", d: "Közde, lokum eşliğinde", p: "75 ₺", img: U("photo-1519676867240-f03562e64548") },
      { n: "Filtre Kahve", d: "Günün çekirdeği", p: "90 ₺", img: U("photo-1495474472287-4d71bcdd2085") },
      { n: "Latte / Cappuccino", d: "Çift shot espresso", p: "110 ₺", img: U("photo-1541167760496-1628856ab772") },
      { n: "Demleme Çay", d: "Bergamotlu / klasik", p: "40 ₺", img: U("photo-1544787219-7f47ccb76574") },
      { n: "Ev Yapımı Limonata", d: "Taze nane ile", p: "95 ₺", img: U("photo-1523677011781-c91d1bbe2f9e") },
      { n: "Sıcak Çikolata", d: "Belçika çikolatası ile", p: "120 ₺", img: U("photo-1542990253-a781e04c0082") },
    ],
  },
];
