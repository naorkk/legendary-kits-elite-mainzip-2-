import madrid from "@/assets/jersey-madrid.jpg";
import barca from "@/assets/jersey-barca.jpg";
import city from "@/assets/jersey-city.jpg";
import psg from "@/assets/jersey-psg.jpg";
import lakers from "@/assets/jersey-lakers.jpg";
import warriors from "@/assets/jersey-warriors.jpg";
import liverpool from "@/assets/jersey-liverpool.jpg";
import united from "@/assets/jersey-united.jpg";
import arsenal from "@/assets/jersey-arsenal.jpg";
import bayern from "@/assets/jersey-bayern.jpg";
import inter from "@/assets/jersey-inter.jpg";
import bulls from "@/assets/jersey-bulls.jpg";
import celtics from "@/assets/jersey-celtics.jpg";
import nets from "@/assets/jersey-nets.jpg";

export type Category = "football" | "nba";

export interface PlayerVariant {
  name: string;
  number: string;
}

export interface Product {
  id: string;
  title: string;
  team: string;
  teamSlug: string;
  teamHe: string;
  category: Category;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  image: string;
  players?: PlayerVariant[];
  era?: string;
  description?: string;
  isRetro?: boolean;
  badge?: string;
}

export interface TeamInfo {
  slug: string;
  name: string;
  nameHe: string;
  category: Category;
  league: string;
  description: string;
  image: string;
}

export const TEAMS: TeamInfo[] = [
  { slug: "manchester-city", name: "Manchester City FC", nameHe: "מנצ׳סטר סיטי", category: "football", league: "Premier League", description: "מועדון הפרמייר ליג המוביל בעידן הנוכחי. חולצות 24/25 ורטרו מהעונות האגדיות.", image: city },
  { slug: "arsenal", name: "Arsenal FC", nameHe: "ארסנל", category: "football", league: "Premier League", description: "The Gunners — ארסנל FC. חולצות עונה נוכחית ורטרו מעידן The Invincibles.", image: arsenal },
  { slug: "liverpool", name: "Liverpool FC", nameHe: "ליברפול", category: "football", league: "Premier League", description: "You'll Never Walk Alone. חולצות עונה נוכחית ורטרו מעידן גרארד ואיסטנבול.", image: liverpool },
  { slug: "manchester-united", name: "Manchester United FC", nameHe: "מנצ׳סטר יונייטד", category: "football", league: "Premier League", description: "The Red Devils. חולצות עונה נוכחית ורטרו מעידן טרבל 1999.", image: united },
  { slug: "real-madrid", name: "Real Madrid CF", nameHe: "ריאל מדריד", category: "football", league: "La Liga", description: "Los Blancos — 14 גביעי Champions League. חולצות עונה נוכחית ורטרו מעידן זידאן.", image: madrid },
  { slug: "barcelona", name: "FC Barcelona", nameHe: "ברצלונה", category: "football", league: "La Liga", description: "Més que un club. חולצות עונה נוכחית ורטרו מעידן מסי, שאבי ואיניסטה.", image: barca },
  { slug: "bayern-munich", name: "FC Bayern Munich", nameHe: "באיירן מינכן", category: "football", league: "Bundesliga", description: "Die Roten — שלישיית הכותרות. חולצות עונה נוכחית ורטרו מעידן UCL 2013.", image: bayern },
  { slug: "psg", name: "Paris Saint-Germain", nameHe: "פריז סן ז׳רמן", category: "football", league: "Ligue 1", description: "PSG — המועדון הצרפתי. חולצות עונה נוכחית ורטרו מעידן איברהימוביץ׳.", image: psg },
  { slug: "lakers", name: "Los Angeles Lakers", nameHe: "לוס אנג׳לס לייקרס", category: "nba", league: "Western Conference", description: "Showtime Lakers — שושלת NBA. גופיות עונה נוכחית ורטרו מעידן קובי וסאק.", image: lakers },
  { slug: "bulls", name: "Chicago Bulls", nameHe: "שיקגו בולס", category: "nba", league: "Eastern Conference", description: "The Last Dance — שיקגו בולס. גופיות עונה נוכחית ורטרו מעידן מייקל ג׳ורדן.", image: bulls },
  { slug: "celtics", name: "Boston Celtics", nameHe: "בוסטון סלטיקס", category: "nba", league: "Eastern Conference", description: "18 אליפויות — הצבא הירוק. גופיות עונה נוכחית ורטרו מעידן לארי בירד.", image: celtics },
  { slug: "warriors", name: "Golden State Warriors", nameHe: "גולדן סטייט ווריורס", category: "nba", league: "Western Conference", description: "Strength in Numbers. גופיות עונה נוכחית ורטרו מעידן הדיינסטי 2017.", image: warriors },
];

export const PRODUCTS: Product[] = [
  // ── FOOTBALL — Current Season ──────────────────────────────────────────
  {
    id: "rm-home-24", title: "ריאל מדריד · בית 24/25", team: "Real Madrid", teamSlug: "real-madrid", teamHe: "ריאל מדריד",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: madrid,
    players: [{ name: "ויניציוס ג׳וניור", number: "7" }, { name: "מבאפה", number: "9" }, { name: "בלינגהאם", number: "5" }, { name: "מודריץ׳", number: "10" }],
    badge: "מבצע השקה",
  },
  {
    id: "fcb-home-24", title: "ברצלונה · בית 24/25", team: "FC Barcelona", teamSlug: "barcelona", teamHe: "ברצלונה",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: barca,
    players: [{ name: "יאמאל", number: "19" }, { name: "לוונה", number: "9" }, { name: "פדרי", number: "8" }, { name: "גאבי", number: "6" }],
    badge: "מבצע השקה",
  },
  {
    id: "mcfc-home-24", title: "מנצ׳סטר סיטי · בית 24/25", team: "Manchester City FC", teamSlug: "manchester-city", teamHe: "מנצ׳סטר סיטי",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 140, image: city,
    players: [{ name: "הולאנד", number: "9" }, { name: "דה ברויינה", number: "17" }, { name: "פיל פודן", number: "47" }],
    badge: "מבצע השקה",
  },
  {
    id: "psg-home-24", title: "פריז סן ז׳רמן · בית 24/25", team: "Paris Saint-Germain", teamSlug: "psg", teamHe: "פריז סן ז׳רמן",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: psg,
    players: [{ name: "דמבלה", number: "10" }, { name: "אשראף", number: "2" }, { name: "לי קאנג-אין", number: "19" }],
    badge: "מבצע השקה",
  },
  {
    id: "lfc-home-24", title: "ליברפול · בית 24/25", team: "Liverpool FC", teamSlug: "liverpool", teamHe: "ליברפול",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: liverpool,
    players: [{ name: "סלאח", number: "11" }, { name: "נונז", number: "9" }, { name: "אלן", number: "6" }],
    badge: "מבצע השקה",
  },
  {
    id: "mufc-home-24", title: "מנצ׳סטר יונייטד · בית 24/25", team: "Manchester United FC", teamSlug: "manchester-united", teamHe: "מנצ׳סטר יונייטד",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: united,
    players: [{ name: "הוילונד", number: "11" }, { name: "רשפורד", number: "10" }, { name: "מאונט", number: "7" }],
    badge: "מבצע השקה",
  },
  {
    id: "ars-home-24", title: "ארסנל · בית 24/25", team: "Arsenal FC", teamSlug: "arsenal", teamHe: "ארסנל",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: arsenal,
    players: [{ name: "סאקה", number: "7" }, { name: "מרטינלי", number: "11" }, { name: "אודגאר", number: "8" }],
    badge: "מבצע השקה",
  },
  {
    id: "fcb-bay-24", title: "באיירן מינכן · בית 24/25", team: "FC Bayern Munich", teamSlug: "bayern-munich", teamHe: "באיירן מינכן",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: bayern,
    players: [{ name: "קיין", number: "9" }, { name: "מוסיאלה", number: "42" }, { name: "גורצקה", number: "8" }],
    badge: "מבצע השקה",
  },
  {
    id: "int-home-24", title: "אינטר מילאן · בית 24/25", team: "Inter Milan", teamSlug: "inter-milan", teamHe: "אינטר מילאן",
    category: "football", categoryLabel: "כדורגל", price: 70, originalPrice: 150, image: inter,
    badge: "מבצע השקה",
  },

  // ── FOOTBALL — Retro Editions ──────────────────────────────────────────
  {
    id: "rm-retro-2002", title: "ריאל מדריד · רטרו 2002", team: "Real Madrid", teamSlug: "real-madrid", teamHe: "ריאל מדריד",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: madrid,
    isRetro: true, era: "2002 · עידן זידאן", badge: "רטרו קלאסיק",
    description: "עונת 2001/02 — ריאל מדריד זוכה ב-Champions League בשאנטיאגו ברנאבאו. הגול של זידאן בגמר נגד לבקוזן — גול שנבחר לטוב בהיסטוריה.",
    players: [{ name: "זידאן", number: "5" }, { name: "רונאלדו", number: "9" }, { name: "ראול", number: "7" }, { name: "פיגו", number: "10" }],
  },
  {
    id: "fcb-retro-2009", title: "ברצלונה · רטרו 2009", team: "FC Barcelona", teamSlug: "barcelona", teamHe: "ברצלונה",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: barca,
    isRetro: true, era: "2009 · עונת הטרבל", badge: "רטרו קלאסיק",
    description: "עונת 2008/09 — ברצלונה של פאו גוארדיולה מנצחת בלה-ליגה, גביע המלך ו-Champions League. The Treble.",
    players: [{ name: "מסי", number: "10" }, { name: "שאבי", number: "6" }, { name: "איניסטה", number: "8" }, { name: "הנרי", number: "14" }],
  },
  {
    id: "mcfc-retro-2012", title: "מנצ׳סטר סיטי · רטרו 2012", team: "Manchester City FC", teamSlug: "manchester-city", teamHe: "מנצ׳סטר סיטי",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: city,
    isRetro: true, era: "2012 · 93:20", badge: "רטרו קלאסיק",
    description: "עונת 2011/12 — מנצ׳סטר סיטי זוכה בתואר בדקה ה-93:20 עם גול אגוארו. אחד הרגעים הדרמטיים בהיסטוריה של הפרמייר ליג.",
    players: [{ name: "אגוארו", number: "16" }, { name: "דוד סילבה", number: "21" }, { name: "קומפאני", number: "4" }, { name: "ת׳אוזאהד", number: "14" }],
  },
  {
    id: "psg-retro-2015", title: "פריז סן ז׳רמן · רטרו 2015", team: "Paris Saint-Germain", teamSlug: "psg", teamHe: "פריז סן ז׳רמן",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: psg,
    isRetro: true, era: "2015 · עידן איברהימוביץ׳", badge: "רטרו קלאסיק",
    description: "עונת 2014/15 — PSG עם זלאטן איברהימוביץ׳ וציוואי. עידן הזהב של הכדורגל הצרפתי עם ארבעת הכותרות הרצופות.",
    players: [{ name: "איברהימוביץ׳", number: "18" }, { name: "לוקאס מורה", number: "29" }, { name: "ואנה", number: "19" }],
  },
  {
    id: "lfc-retro-2005", title: "ליברפול · רטרו 2005", team: "Liverpool FC", teamSlug: "liverpool", teamHe: "ליברפול",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: liverpool,
    isRetro: true, era: "2005 · ניסים איסטנבול", badge: "רטרו קלאסיק",
    description: "גמר Champions League 2005 — איסטנבול. ליברפול מפסידה 0:3 ומנצחת 3:3, ואז בפנדלים. הלילה האגדי ביותר בכדורגל.",
    players: [{ name: "גרארד", number: "8" }, { name: "אלונסו", number: "14" }, { name: "מלו", number: "9" }],
  },
  {
    id: "mufc-retro-1999", title: "מנצ׳סטר יונייטד · רטרו 1999", team: "Manchester United FC", teamSlug: "manchester-united", teamHe: "מנצ׳סטר יונייטד",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: united,
    isRetro: true, era: "1999 · עונת הטרבל", badge: "רטרו קלאסיק",
    description: "עונת 1998/99 — מנצ׳סטר יונייטד של פרגוסון זוכה בפרמייר ליג, גביע FA ו-Champions League. The Treble.",
    players: [{ name: "בקהאם", number: "7" }, { name: "גיגס", number: "11" }, { name: "שולס", number: "18" }, { name: "קיין", number: "16" }],
  },
  {
    id: "ars-retro-2004", title: "ארסנל · רטרו 2004", team: "Arsenal FC", teamSlug: "arsenal", teamHe: "ארסנל",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: arsenal,
    isRetro: true, era: "2004 · The Invincibles", badge: "רטרו קלאסיק",
    description: "עונת 2003/04 — ארסנל The Invincibles של ונגר. 38 משחקים ללא הפסד. התואר הבלתי מנוצח בפרמייר ליג.",
    players: [{ name: "הנרי", number: "14" }, { name: "ברגקאמפ", number: "10" }, { name: "וייאה", number: "4" }, { name: "פירס", number: "3" }],
  },
  {
    id: "bay-retro-2013", title: "באיירן מינכן · רטרו 2013", team: "FC Bayern Munich", teamSlug: "bayern-munich", teamHe: "באיירן מינכן",
    category: "football", categoryLabel: "כדורגל · רטרו", price: 70, originalPrice: 150, image: bayern,
    isRetro: true, era: "2013 · גמר UCL", badge: "רטרו קלאסיק",
    description: "עונת 2012/13 — באיירן מינכן של יופ היינקס זוכה ב-Champions League בוומבלי מול בורוסיה דורטמונד. The Treble.",
    players: [{ name: "רובן", number: "10" }, { name: "ריברי", number: "7" }, { name: "לבנדובסקי", number: "9" }, { name: "נוייר", number: "1" }],
  },

  // ── NBA — Current Season ───────────────────────────────────────────────
  {
    id: "lal-23", title: "לוס אנג׳לס לייקרס · 23", team: "Los Angeles Lakers", teamSlug: "lakers", teamHe: "לוס אנג׳לס לייקרס",
    category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: lakers,
    players: [{ name: "LeBron James", number: "23" }, { name: "Anthony Davis", number: "3" }, { name: "Austin Reaves", number: "15" }],
    badge: "מבצע השקה",
  },
  {
    id: "gsw-30", title: "גולדן סטייט ווריורס · 30", team: "Golden State Warriors", teamSlug: "warriors", teamHe: "גולדן סטייט ווריורס",
    category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: warriors,
    players: [{ name: "Stephen Curry", number: "30" }, { name: "Klay Thompson", number: "11" }, { name: "Draymond Green", number: "23" }],
    badge: "מבצע השקה",
  },
  {
    id: "chi-23", title: "שיקגו בולס · 23", team: "Chicago Bulls", teamSlug: "bulls", teamHe: "שיקגו בולס",
    category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: bulls,
    players: [{ name: "Zach LaVine", number: "8" }, { name: "DeMar DeRozan", number: "11" }, { name: "Nikola Vucevic", number: "9" }],
    badge: "מבצע השקה",
  },
  {
    id: "bos-0", title: "בוסטון סלטיקס · 0", team: "Boston Celtics", teamSlug: "celtics", teamHe: "בוסטון סלטיקס",
    category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: celtics,
    players: [{ name: "Jayson Tatum", number: "0" }, { name: "Jaylen Brown", number: "7" }, { name: "Al Horford", number: "42" }],
    badge: "מבצע השקה",
  },
  {
    id: "bkn-7", title: "ברוקלין נטס · 7", team: "Nets", teamSlug: "nets", teamHe: "ברוקלין נטס",
    category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: nets,
    badge: "מבצע השקה",
  },

  // ── NBA — Retro Editions ───────────────────────────────────────────────
  {
    id: "lal-retro-96", title: "לייקרס · רטרו 1996", team: "Los Angeles Lakers", teamSlug: "lakers", teamHe: "לוס אנג׳לס לייקרס",
    category: "nba", categoryLabel: "NBA · רטרו", price: 70, originalPrice: 150, image: lakers,
    isRetro: true, era: "1996 · עידן קובי", badge: "רטרו קלאסיק",
    description: "הדינסטי של לוס אנג׳לס — קובי וסאק. 3 אליפויות רצופות (2000-2002). ה-Showtime Lakers בגרסה המודרנית.",
    players: [{ name: "Kobe Bryant", number: "8" }, { name: "Shaquille O'Neal", number: "34" }, { name: "Magic Johnson", number: "32" }],
  },
  {
    id: "chi-retro-96", title: "בולס · רטרו 1996", team: "Chicago Bulls", teamSlug: "bulls", teamHe: "שיקגו בולס",
    category: "nba", categoryLabel: "NBA · רטרו", price: 70, originalPrice: 150, image: bulls,
    isRetro: true, era: "1996 · The Last Dance", badge: "רטרו קלאסיק",
    description: "עונת 1995/96 — שיקגו בולס של מייקל ג׳ורדן. 72-10 בסדרה הסדירה. The Last Dance — 6 אליפויות NBA.",
    players: [{ name: "Michael Jordan", number: "23" }, { name: "Scottie Pippen", number: "33" }, { name: "Dennis Rodman", number: "91" }],
  },
  {
    id: "bos-retro-86", title: "סלטיקס · רטרו 1986", team: "Boston Celtics", teamSlug: "celtics", teamHe: "בוסטון סלטיקס",
    category: "nba", categoryLabel: "NBA · רטרו", price: 70, originalPrice: 150, image: celtics,
    isRetro: true, era: "1986 · Celtic Pride", badge: "רטרו קלאסיק",
    description: "עונת 1985/86 — בוסטון סלטיקס של לארי בירד. 67 ניצחונות. הנבחרת שנחשבת לאחת הטובות בכל ההיסטוריה של NBA.",
    players: [{ name: "Larry Bird", number: "33" }, { name: "Kevin McHale", number: "32" }, { name: "Robert Parish", number: "00" }],
  },
  {
    id: "gsw-retro-2017", title: "ווריורס · רטרו 2017", team: "Golden State Warriors", teamSlug: "warriors", teamHe: "גולדן סטייט ווריורס",
    category: "nba", categoryLabel: "NBA · רטרו", price: 70, originalPrice: 150, image: warriors,
    isRetro: true, era: "2017 · Dynasty Edition", badge: "רטרו קלאסיק",
    description: "עונת 2016/17 — גולדן סטייט ווריורס עם דאראנט. 16-1 בפלייאוף. הדינסטי שהגדיר את ה-NBA של העשור.",
    players: [{ name: "Stephen Curry", number: "30" }, { name: "Kevin Durant", number: "35" }, { name: "Klay Thompson", number: "11" }],
  },
];

export const WHATSAPP_NUMBER = "972508100032";
export const INSTAGRAM_URL =
  "https://www.instagram.com/legendary_kits7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function buildWhatsAppUrl(text: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(product: Product, size: string, player?: PlayerVariant) {
  const playerLine = player ? `👤 שחקן: ${player.name} #${player.number}\n` : "";
  const msg =
`שלום LEGENDARY KITS! ✨
אני רוצה להזמין:

👕 פריט: ${product.title}
${playerLine}📏 מידה: ${size}
💰 מחיר השקה: ${product.price} ₪

אשמח לסגור פרטי משלוח ותשלום.`;
  return buildWhatsAppUrl(msg);
}
