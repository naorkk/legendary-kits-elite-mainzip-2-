import { useEffect, useState } from "react";
import { Instagram, ShoppingBag } from "lucide-react";
import { INSTAGRAM_URL } from "./products";

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
}

export function Header({ cartCount, onCartOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#shop", label: "החנות" },
    { href: "#football", label: "כדורגל" },
    { href: "#nba", label: "NBA" },
    { href: "#about", label: "אודות" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "header-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Left: nav (RTL flips visually to left) */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] tracking-wide text-foreground/75 hover:text-[#F3CF5D] transition-colors uppercase"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 grid place-items-center rounded-full border border-border text-foreground/70 hover:text-[#F3CF5D] hover:border-[#D4AF37]/60 transition-colors"
          >
            <Instagram size={16} />
          </a>
          <button
            onClick={onCartOpen}
            aria-label="עגלה"
            className="relative w-9 h-9 grid place-items-center rounded-full border border-border text-foreground/80 hover:text-[#F3CF5D] hover:border-[#D4AF37]/60 transition-colors"
          >
            <ShoppingBag size={16} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold grid place-items-center bg-[#D4AF37] text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Logo right-aligned */}
          <a href="#top" className="flex items-baseline gap-1.5 pr-2">
            <span className="text-lg md:text-xl font-black tracking-[0.18em] uppercase font-display">
              LEGENDARY
            </span>
            <span className="text-lg md:text-xl font-black tracking-[0.18em] uppercase text-gold-shine">
              KITS
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}