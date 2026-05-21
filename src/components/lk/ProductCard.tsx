import { TEAMS, type Product } from "./products";

export function ProductCard({
  product,
  onQuickBuy,
}: {
  product: Product;
  onQuickBuy: (p: Product) => void;
}) {
  const team = TEAMS.find((t) => t.slug === product.teamSlug);

  return (
    <article className="group card-carbon rounded-2xl overflow-hidden flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-black">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            width={800}
            height={800}
            className="zoom-img w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center zoom-img"
            style={{
              background: team
                ? `linear-gradient(135deg, ${team.primaryColor}22 0%, ${team.secondaryColor}44 100%)`
                : "linear-gradient(135deg, #1a1a1a, #0a0a0a)",
            }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center font-black text-white shadow-xl mb-3"
              style={{
                background: team
                  ? `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})`
                  : "linear-gradient(135deg,#D4AF37,#F3CF5D)",
                fontSize: 22,
              }}
            >
              {team?.abbrev ?? "LK"}
            </div>
            <span className="text-xs text-foreground/50 tracking-widest uppercase">
              {team?.nameHe ?? product.team}
            </span>
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 right-3">
          <div
            className="text-[10px] tracking-[0.25em] uppercase font-black px-3 py-1.5 rounded-sm text-black"
            style={{ background: "linear-gradient(135deg,#D4AF37,#F3CF5D)" }}
          >
            {product.badge ?? "מבצע השקה"}
          </div>
        </div>
        {/* Category tag */}
        <div className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-foreground/70 bg-black/60 backdrop-blur px-2.5 py-1 rounded-sm border border-border">
          {product.categoryLabel}
        </div>

        {/* Quick buy */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-0 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <button
            onClick={() => onQuickBuy(product)}
            className="btn-gold w-full rounded-full py-3 text-sm uppercase tracking-wider"
          >
            לרכישה מהירה
          </button>
        </div>
      </div>

      <div className="p-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-base md:text-lg leading-tight">{product.title}</h3>
          {product.era && (
            <p className="text-[10px] text-[#D4AF37] tracking-widest uppercase mt-0.5">{product.era}</p>
          )}
          <p className="text-xs text-muted-foreground tracking-wider mt-1 uppercase">{product.team}</p>
        </div>
        <div className="text-left whitespace-nowrap">
          <div className="text-xl font-black text-gold-shine leading-none">₪{product.price}</div>
          <div className="text-xs text-muted-foreground line-through mt-1">₪{product.originalPrice}</div>
        </div>
      </div>
    </article>
  );
}
