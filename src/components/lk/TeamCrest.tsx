import type { TeamInfo } from "./products";

interface Props {
  team: TeamInfo;
  size?: number;
  className?: string;
}

export function TeamCrest({ team, size = 56, className = "" }: Props) {
  const fontSize = Math.round(size * 0.3);
  return (
    <div
      className={`rounded-full flex items-center justify-center font-black text-white shadow-lg shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.secondaryColor} 100%)`,
        fontSize,
        letterSpacing: "-0.03em",
      }}
      title={team.name}
    >
      {team.abbrev}
    </div>
  );
}

interface CardProps {
  team: TeamInfo;
  onClick?: () => void;
}

export function TeamCrestCard({ team, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-transparent hover:border-[#D4AF37]/40 hover:bg-white/[0.03] transition-all duration-300"
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center font-black text-white shadow-md group-hover:shadow-[0_0_18px_rgba(212,175,55,0.35)] transition-shadow duration-300"
        style={{
          background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.secondaryColor} 100%)`,
          fontSize: 16,
          letterSpacing: "-0.02em",
        }}
      >
        {team.abbrev}
      </div>
      <span className="text-[10px] text-center text-foreground/60 group-hover:text-[#F3CF5D] transition-colors leading-tight max-w-[72px]">
        {team.nameHe}
      </span>
    </button>
  );
}
