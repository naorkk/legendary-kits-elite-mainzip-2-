import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, buildWhatsAppUrl } from "./products";

export function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black tracking-[0.18em] uppercase">LEGENDARY</span>
            <span className="text-xl font-black tracking-[0.18em] uppercase text-gold-shine">KITS</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            סטייל ספורט אגדי. חולצות כדורגל וגופיות NBA פרימיום, נבחרות בקפידה,
            במחיר ובאיכות שאף אחד לא מציע בישראל.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[#F3CF5D] mb-4">צור קשר</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={buildWhatsAppUrl("שלום LEGENDARY KITS!")} target="_blank" rel="noreferrer" className="hover:text-[#F3CF5D] transition">
                וואטסאפ · 050-810-0032
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#F3CF5D] transition inline-flex items-center gap-2">
                <Instagram size={14} /> @legendary_kits7
              </a>
            </li>
            <li>משלוחים: בכל רחבי הארץ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[#F3CF5D] mb-4">המחויבות שלנו</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>אחריות מלאה על כל פריט</li>
            <li>חומרים פרימיום בלבד · Dry-Fit</li>
            <li>שירות אישי 1-on-1</li>
            <li>החלפות ללא בעיה</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground tracking-widest uppercase">
        © {new Date().getFullYear()} LEGENDARY KITS · Crafted with gold
      </div>
    </footer>
  );
}