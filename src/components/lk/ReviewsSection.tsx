import { useState } from "react";
import { Star, Check, CheckCircle2, User, ChevronLeft, ChevronRight } from "lucide-react";

export interface Review {
  id: string;
  name: string;
  rating: number;
  title: string;
  content: string;
  productName: string;
  date: string;
  verified: boolean;
}

export const HOME_REVIEWS: Review[] = [
  {
    id: "1",
    name: "עידן קוממי",
    rating: 5,
    title: "איכות בד מטורפת ושחזור מדויק",
    content: "קניתי את חולצת ריאל מדריד רטרו 1998 עם ההדפסה של ראול. פשוט ואו! הבד מרגיש מסיבי ואיכותי, הסמל רקום מושלם, ההדפסה לא זזה בכביסה והגזרה יושבת בול.",
    productName: "חולצת ריאל מדריד רטרו 1998/99",
    date: "לפני 3 ימים",
    verified: true,
  },
  {
    id: "2",
    name: "אופק בן-סימון",
    rating: 5,
    title: "גופיית NBA ברמת הגימור הכי גבוהה שיש",
    content: "הזמנתי גופיית שיקגו בולס רטרו של מייקל ג'ורדן. בד הרשת נושם ומאוורר, הלוגו של הבולס רקום באיכות מטורפת וכל התגים המקוריים נמצאים. קנייה מעולה!",
    productName: "גופיית שיקגו בולס רטרו",
    date: "לפני שבוע",
    verified: true,
  },
  {
    id: "3",
    name: "תומר שטיינר",
    rating: 5,
    title: "שירות לקוחות נדיר בוואטסאפ",
    content: "לא הייתי בטוח לגבי המידה שלי, שלחתי להם הודעה בוואטסאפ ותוך שתי דקות נציג ענה לי ועזר לי להתאים את המידה בדיוק לגובה שלי. המשלוח הגיע סופר מהיר, שירות 10/10.",
    productName: "חולצת מנצ'סטר יונייטד בית",
    date: "לפני יומיים",
    verified: true,
  },
  {
    id: "4",
    name: "דניאל מרציאנו",
    rating: 5,
    title: "השחזור הכי טוב שראיתי בארץ",
    content: "כאספן חולצות כדורגל, אני בודק כל תפר. רמת הדיוק בפרטים הקטנים של חולצת מילאן 2006 פשוט השאירה אותי בשוק. הלוגואים והספונסר יושבים בדיוק במקום. שווה כל שקל.",
    productName: "חולצת מילאן רטרו 2006/07",
    date: "לפני 5 ימים",
    verified: true,
  },
  {
    id: "5",
    name: "רועי פלדמן",
    rating: 5,
    title: "משלוח מהיר ואיכות פרימיום של בד דרי-פיט",
    content: "הזמנתי חולצה של ברצלונה לעונה הנוכחית והיא הגיעה אליי הביתה תוך 3 ימים בלבד! הבד דרי-פיט קליל ומנדף זיעה, הלוגו מובלט יפיפה וזה מושלם גם לאימונים וגם לרחוב.",
    productName: "חולצת ברצלונה בית 2024/25",
    date: "לפני שבוע",
    verified: true,
  },
  {
    id: "6",
    name: "עמית הררי",
    rating: 5,
    title: "מתנה מושלמת לחבר הכי טוב",
    content: "הזמנתי את גופיית הלייקרס של קובי כמתנת יום הולדת. חבר שלי פשוט לא מוריד אותה! ההדפסה מאחורה איכותית ועמידה והסמל של הלייקרס רקום מדהים. ממליצה מאוד.",
    productName: "גופיית לוס אנג'לס לייקרס קובי בראיינט",
    date: "לפני 4 ימים",
    verified: true,
  },
];

// Helper to generate context-specific reviews in the product modal
export function getProductReviews(productName: string, isRetro?: boolean, category?: string, teamHe?: string): Review[] {
  const reviews: Review[] = [];
  const typeText = category === "nba" ? "הגופייה" : "החולצה";
  const teamText = teamHe || "הקבוצה";

  if (category === "nba") {
    reviews.push({
      id: "p1",
      name: "אלון מ.",
      rating: 5,
      title: `גופיית NBA פרימיום מושלמת`,
      content: `הזמנתי את גופיית ${teamText} והיא פשוט ברמה הגבוהה ביותר. בד הרשת מאוורר ונושם, הלוגו רקום בצורה עבה ואיכותית ולא סתם מודבק, והתגים המקוריים נראים 100% אותנטיים.`,
      productName: productName,
      date: "לפני יומיים",
      verified: true,
    });
  } else {
    reviews.push({
      id: "p1",
      name: "יונתן ל.",
      rating: 5,
      title: `איכות בד Dry-Fit מדהימה`,
      content: `קניתי את חולצת ${teamText} והופתעתי לטובה מרמת הגימור. הלוגו של ${teamText} והיצרן מובלטים בסיליקון תלת-מימדי יוקרתי, בדיוק כמו חולצות השחקן המקוריות. הבד גמיש ומנדף זיעה מצוין.`,
      productName: productName,
      date: "לפני 4 ימים",
      verified: true,
    });
  }

  if (isRetro) {
    reviews.push({
      id: "p2",
      name: "שגיא א.",
      rating: 5,
      title: `שחזור רטרו נוסטלגי ומטורף`,
      content: `חיפשתי את הדגם הזה של ${teamText} המון זמן בחו״ל ולא מצאתי באיכות נורמלית. השחזור כאן הוא ברמת המילימטר! התפירה חזקה, הצבעים עזים וההדפסה מאחורה עמידה לגמרי בכביסה. נוסטלגיה טהורה!`,
      productName: productName,
      date: "לפני שבוע",
      verified: true,
    });
  } else {
    reviews.push({
      id: "p2",
      name: "מתן כ.",
      rating: 5,
      title: `הדפסה אישית מושלמת של שחקן`,
      content: `בחרתי בגרסה עם הדפסת שחקן מאחורה והגיע פשוט מושלם. הפונט הוא הפונט הרשמי של ${teamText} העונה, מיושר בצורה מדויקת ועבר כבר 3 כביסות בלי שום סימן לקילוף או סדק. שירות בוואטסאפ ענו לי מיד.`,
      productName: productName,
      date: "לפני 3 ימים",
      verified: true,
    });
  }

  reviews.push({
    id: "p3",
    name: "ליאור ג.",
    rating: 5,
    title: "שירות אליפות ומשלוח מהיר",
    content: `המשלוח הגיע אליי עד הבית בתוך 3 ימים. שירות הלקוחות בוואטסאפ ליווה אותי מהרגע של התאמת המידה ועד שהחבילה הגיעה. ${typeText} יושבת עליי בול. ללא ספק ארכוש כאן שוב!`,
    productName: productName,
    date: "לפני 5 ימים",
    verified: true,
  });

  return reviews;
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-border bg-[#050505] relative overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-shine/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#F3CF5D] mb-3">Customer feedback</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.02em]">
            לקוחות <span className="text-gold-shine">ממליצים</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
            הצטרפו למאות חובבי כדורגל ו-NBA שכבר שדרגו את המלתחה שלהם באיכות הפרימיום של LEGENDARY KITS.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          
          {/* Aggregated Score Card */}
          <div className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-3xl p-8 flex flex-col items-center text-center shadow-lg h-full justify-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">דירוג חנות ממוצע</h3>
            <div className="text-6xl font-black text-gold-shine flex items-baseline gap-1">
              4.93<span className="text-2xl text-muted-foreground">/5</span>
            </div>
            
            {/* Stars */}
            <div className="flex gap-1.5 my-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-[#F3CF5D] text-[#F3CF5D]" />
              ))}
            </div>

            <p className="text-sm font-bold text-foreground">מבוסס על 180+ ביקורות מאומתות</p>
            <div className="mt-6 flex items-center gap-2 bg-[#122214] text-[#4ade80] px-4 py-2 rounded-full border border-[#1b3d22]/50 text-xs font-bold">
              <CheckCircle2 size={14} className="shrink-0" />
              100% רוכשים מרוצים וממליצים
            </div>
          </div>

          {/* Ratings Progress Breakdown */}
          <div className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-3xl p-8 lg:col-span-2 shadow-lg h-full">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 text-right">פילוח חוות דעת</h3>
            <div className="space-y-4">
              {[
                { stars: 5, pct: 94, count: 169 },
                { stars: 4, pct: 6, count: 11 },
                { stars: 3, pct: 0, count: 0 },
                { stars: 2, pct: 0, count: 0 },
                { stars: 1, pct: 0, count: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-4 text-sm dir-rtl">
                  <span className="w-12 text-left font-bold text-muted-foreground shrink-0">{row.stars} כוכבים</span>
                  <div className="flex-1 h-3 bg-black/60 rounded-full overflow-hidden border border-[#1a1a1a]">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${row.pct}%`,
                        background: "linear-gradient(90deg, #D4AF37, #F3CF5D)"
                      }}
                    />
                  </div>
                  <span className="w-12 text-right font-bold text-foreground shrink-0">{row.pct}%</span>
                  <span className="w-12 text-left text-xs text-muted-foreground shrink-0 hidden sm:inline">({row.count})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_REVIEWS.map((rev) => (
            <div 
              key={rev.id} 
              className="group bg-[#0a0a0a] border border-[#161616] hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgb(212,175,55,0.05)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground group-hover:text-gold-shine transition-colors">{rev.name}</span>
                      {rev.verified && (
                        <span className="flex items-center gap-1 text-[10px] text-[#4ade80] bg-[#122214] border border-[#1b3d22]/30 px-2 py-0.5 rounded-full">
                          <Check size={8} />
                          רוכש מאומת
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-muted-foreground">{rev.date}</span>
                  </div>
                  
                  {/* Initials Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[#141414] border border-[#222] flex items-center justify-center text-xs font-bold text-[#F3CF5D] uppercase shrink-0">
                    {rev.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#F3CF5D] text-[#F3CF5D]" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold mb-2 text-foreground leading-tight">{rev.title}</h4>
                
                {/* Content */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{rev.content}</p>
              </div>

              {/* Product bought tag */}
              <div className="mt-auto pt-3 border-t border-[#141414] text-[10px] text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>דגם: <b className="text-foreground/90 font-medium">{rev.productName}</b></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
