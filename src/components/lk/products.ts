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

export interface Product {
  id: string;
  title: string;
  team: string;
  category: Category;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  image: string;
}

export const PRODUCTS: Product[] = [
  { id: "rm-home-24", title: "ריאל מדריד · בית 24/25", team: "Real Madrid", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: madrid },
  { id: "fcb-home-24", title: "ברצלונה · בית 24/25", team: "FC Barcelona", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: barca },
  { id: "mcfc-home-24", title: "מנצ׳סטר סיטי · בית 24/25", team: "Man City", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 140, image: city },
  { id: "psg-home-24", title: "פריז סן ז׳רמן · בית 24/25", team: "PSG", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: psg },
  { id: "lfc-home-24", title: "ליברפול · בית 24/25", team: "Liverpool", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: liverpool },
  { id: "mufc-home-24", title: "מנצ׳סטר יונייטד · בית 24/25", team: "Man United", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: united },
  { id: "ars-home-24", title: "ארסנל · בית 24/25", team: "Arsenal", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: arsenal },
  { id: "fcb-bay-24", title: "באיירן מינכן · בית 24/25", team: "Bayern Munich", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: bayern },
  { id: "int-home-24", title: "אינטר מילאן · בית 24/25", team: "Inter Milan", category: "football", categoryLabel: "חנות כדורגל", price: 70, originalPrice: 150, image: inter },
  { id: "lal-23", title: "לוס אנג׳לס לייקרס · 23", team: "Lakers", category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: lakers },
  { id: "gsw-30", title: "גולדן סטייט ווריורס · 30", team: "Warriors", category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: warriors },
  { id: "chi-23", title: "שיקגו בולס · 23", team: "Bulls", category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: bulls },
  { id: "bos-0", title: "בוסטון סלטיקס · 0", team: "Celtics", category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: celtics },
  { id: "bkn-7", title: "ברוקלין נטס · 7", team: "Nets", category: "nba", categoryLabel: "גופיות NBA", price: 70, originalPrice: 150, image: nets },
];

export const WHATSAPP_NUMBER = "972508100032";
export const INSTAGRAM_URL =
  "https://www.instagram.com/legendary_kits7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function buildWhatsAppUrl(text: string) {
  // api.whatsapp.com/send is the most reliable across desktop + mobile + in-app browsers
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(product: Product, size: string) {
  const msg =
`שלום LEGENDARY KITS! ✨
אני רוצה להזמין:

👕 פריט: ${product.title}
📏 מידה: ${size}
💰 מחיר השקה: ${product.price} ₪

אשמח לסגור פרטי משלוח ותשלום.`;
  return buildWhatsAppUrl(msg);
}