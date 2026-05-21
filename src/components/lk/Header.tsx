import { useEffect, useRef, useState } from "react";
import { Instagram, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { INSTAGRAM_URL, TEAMS } from "./products";

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
}

const FOOTBALL_TEAMS = TEAMS.filter((t) => t.category === "football");
const NBA_TEAMS = TEAMS.filter((t) => t.category === "nba");

const LEAGUES_FOOTBALL = ["Premier League", "La Liga", "Bundesliga", "Ligue 1"];
const LEAGUES_NBA = ["Western Conference", "Eastern Conference"];

function NavDropdown({ label, leagues, teams, onClose }: {
  label: string;
  leagues: string[];
  teams: typeof TEAMS;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[13px] tracking-wide text-foreground/75 hover:text-[#F3CF5D] transition-colors uppercase"
      >
        {label}
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-64 rounded-xl border border-[#1F1F1F] bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl z-50 py-2 animate-fade-in">
          {leagues.map((league) => {
            const leagueTeams = teams.filter((t) => t.league === league);
            if (!leagueTeams.length) return null;
            return (
              <div key={league}>
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37]/60 px-4 pt-3 pb-1.5">{league}</p>
                {leagueTeams.map((team) => (
                  <Link
                    key={team.slug}
                    to="/teams/$team"
                    params={{ team: team.slug }}
                    onClick={() => { setOpen(false); onClose(); }}
                    className="block px-4 py-2 text-sm text-foreground/75 hover:text-[#F3CF5D] hover:bg-white/5 transition-colors"
                  >
                    {team.name}
                  </Link>
                ))}
              </div>
            );
          })}
          <div className="border-t border-border mt-2 pt-2">
            <Link
              to="/"
              hash="shop"
              onClick={() => { setOpen(false); onClose(); }}
              className="block px-4 py-2 text-xs text-[#D4AF37] hover:text-[#F3CF5D] transition-colors uppercase tracking-wider"
            >
              כל הקולקציה →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header({ cartCount, onCartOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "header-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <NavDropdown label="כדורגל" leagues={LEAGUES_FOOTBALL} teams={FOOTBALL_TEAMS} onClose={() => {}} />
          <NavDropdown label="NBA" leagues={LEAGUES_NBA} teams={NBA_TEAMS} onClose={() => {}} />
          <a href="/#shop" className="text-[13px] tracking-wide text-foreground/75 hover:text-[#F3CF5D] transition-colors uppercase">החנות</a>
          <Link to="/about" className="text-[13px] tracking-wide text-foreground/75 hover:text-[#F3CF5D] transition-colors uppercase">אודות</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden md:grid w-9 h-9 place-items-center rounded-full border border-border text-foreground/70 hover:text-[#F3CF5D] hover:border-[#D4AF37]/60 transition-colors"
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

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 pr-2">
            <img src="/logo.jpg" alt="Legendary Kits" className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]/50" />
            <span className="hidden sm:block text-base md:text-lg font-black tracking-[0.12em] uppercase font-display text-gold-shine">
              LEGENDARY KITS
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-border text-foreground/80"
            aria-label="תפריט"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-border animate-fade-in z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-4 space-y-4">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37]">כדורגל</p>
            {LEAGUES_FOOTBALL.map((league) => (
              <div key={league}>
                <p className="text-[9px] tracking-[0.3em] uppercase text-foreground/40 mb-2">{league}</p>
                {FOOTBALL_TEAMS.filter((t) => t.league === league).map((team) => (
                  <Link
                    key={team.slug}
                    to="/teams/$team"
                    params={{ team: team.slug }}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-foreground/75 hover:text-[#F3CF5D]"
                  >
                    {team.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="border-t border-border pt-4">
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] mb-3">NBA</p>
              {LEAGUES_NBA.map((league) => (
                <div key={league}>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-foreground/40 mb-2">{league}</p>
                  {NBA_TEAMS.filter((t) => t.league === league).map((team) => (
                    <Link
                      key={team.slug}
                      to="/teams/$team"
                      params={{ team: team.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-foreground/75 hover:text-[#F3CF5D]"
                    >
                      {team.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground/75 hover:text-[#F3CF5D]">אודות</Link>
              <Link to="/shipping" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground/75 hover:text-[#F3CF5D]">משלוחים והחזרות</Link>
              <Link to="/faq" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground/75 hover:text-[#F3CF5D]">שאלות נפוצות</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
