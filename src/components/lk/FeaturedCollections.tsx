import { Link } from "@tanstack/react-router";
import { TEAMS } from "./products";

const FEATURED_FOOTBALL = TEAMS.filter((t) => t.category === "football");
const FEATURED_NBA = TEAMS.filter((t) => t.category === "nba");

function TeamCard({ team }: { team: typeof TEAMS[0] }) {
  return (
    <Link
      to="/teams/$team"
      params={{ team: team.slug }}
      className="group relative rounded-2xl overflow-hidden aspect-square bg-black border border-[#1F1F1F] hover:border-[#D4AF37]/50 transition-all duration-500"
    >
      <img
        src={team.image}
        alt={team.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[9px] tracking-[0.35em] uppercase text-[#D4AF37] mb-1">{team.league}</p>
        <h3 className="font-black text-base leading-tight text-white group-hover:text-[#F3CF5D] transition-colors duration-300">
          {team.nameHe}
        </h3>
        <p className="text-[11px] text-foreground/60 mt-1 leading-snug line-clamp-2">{team.description}</p>
        <div className="mt-3 flex items-center gap-1 text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>לקולקציה</span>
          <span>←</span>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedCollections() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#F3CF5D] mb-3">
          Teams &amp; Clubs
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.02em]">
          <span className="text-gold-shine">קולקציות</span> אגדיות
        </h2>
        <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
          חולצות עונה נוכחית לצד מהדורות רטרו אייקוניות — לכל קבוצה, לכל עידן.
        </p>
      </div>

      {/* Football */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37]">Football · Soccer</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURED_FOOTBALL.map((team) => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </div>

      {/* NBA */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37]">Basketball · NBA</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURED_NBA.map((team) => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
