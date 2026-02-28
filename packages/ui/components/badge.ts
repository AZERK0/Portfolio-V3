type UiBadgeTone = "accent" | "neutral" | "outline";

type UiBadgeProps = {
  className?: string;
  label: string;
  tone?: UiBadgeTone;
};

const badgeToneClass: Record<UiBadgeTone, string> = {
  accent: "border-[#f48c25]/30 bg-[#f48c25]/15 text-[#f6b272]",
  neutral: "border-white/10 bg-zinc-900 text-zinc-200",
  outline: "border-white/15 bg-transparent text-zinc-300",
};

export function UiBadge({ className = "", label, tone = "neutral" }: UiBadgeProps) {
  return `<span class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${badgeToneClass[tone]} ${className}">${label}</span>`;
}
