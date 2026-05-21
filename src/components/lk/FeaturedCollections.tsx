import { useNavigate } from "@tanstack/react-router";
import { TEAMS } from "./products";

const LEAGUES_ORDER = [
  "Premier League",
  "La Liga",
  "Serie A",
  "Bundesliga",
  "Ligue 1",
  "Rest of World",
  "National Teams",
  "Eastern Conference",
  "Western Conference",
];

const LEAGUE_LABELS: Record<string, string> = {
  "Premier League": "Premier League 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "La Liga": "La Liga 🇪🇸",
  "Serie A": "Serie A 🇮🇹",
  "Bundesliga": "Bundesliga 🇩🇪",
  "Ligue 1": "Ligue 1 🇫🇷",
  "Rest of World": "קבוצות העולם 🌍",
  "National Teams": "נבחרות לאומיות 🌎",
  "Eastern Conference": "NBA — Eastern Conference 🏀",
  "Western Conference": "NBA — Western Conference 🏀",
};

function LeagueSection({ league, teams, onTeamClick }: {
  league: string;
  teams: typeof TEAMS;
  onTeamClick: (slug: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] whitespace-nowrap">
          {LEAGUE_LABELS[league] ?? league}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1">
        {teams.map((team) => (
          <button
            key={team.slug}
            onClick={() => onTeamClick(team.slug)}
            className="group flex flex-col items-center gap-2 p-2 rounded-xl border border-transparent hover:border-[#D4AF37]/40 hover:bg-white/[0.03] transition-all duration-300"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white shadow-md group-hover:shadow-[0_0_16px_rgba(212,175,55,0.3)] transition-shadow duration-300 text-[13px]"
              style={{
                background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.secondaryColor} 100%)`,
              }}
            >
              {team.abbrev}
            </div>
            <span className="text-[9px] text-center text-foreground/55 group-hover:text-[#F3CF5D] transition-colors leading-tight max-w-[64px]">
              {team.nameHe}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function FeaturedCollections() {
  const navigate = useNavigate();

  const byLeague = LEAGUES_ORDER.reduce<Record<string, typeof TEAMS>>(
    (acc, league) => {
      const t = TEAMS.filter((tm) => tm.league === league);
      if (t.length > 0) acc[league] = t;
      return acc;
    },
    {}
  );

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 border-t border-border">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#F3CF5D] mb-3">
          Teams &amp; Clubs
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.02em]">
          כל <span className="text-gold-shine">הקבוצות</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
          {TEAMS.length} קבוצות — חולצות עונה נוכחית וקולקציות רטרו אייקוניות.
          לחצו על לוגו קבוצה לכניסה לקולקציה המלאה.
        </p>
      </div>

      <div className="space-y-10">
        {Object.entries(byLeague).map(([league, teams]) => (
          <LeagueSection
            key={league}
            league={league}
            teams={teams}
            onTeamClick={(slug) => navigate({ to: "/teams/$team", params: { team: slug } })}
          />
        ))}
      </div>
    </section>
  );
}
