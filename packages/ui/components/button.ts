type UiButtonVariant = "primary" | "ghost";

type UiButtonProps = {
  className?: string;
  href: string;
  label: string;
  variant?: UiButtonVariant;
};

const buttonVariantClass: Record<UiButtonVariant, string> = {
  primary:
    "border border-amber-300/30 bg-amber-400/90 text-zinc-950 shadow-[0_0_32px_-12px_rgba(251,191,36,0.85)] hover:bg-amber-300",
  ghost: "border border-white/15 bg-zinc-950/50 text-zinc-100 hover:bg-zinc-900",
};

export function UiButton({ className = "", href, label, variant = "primary" }: UiButtonProps) {
  return `<a href="${href}" class="inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold transition ${buttonVariantClass[variant]} ${className}">${label}</a>`;
}
