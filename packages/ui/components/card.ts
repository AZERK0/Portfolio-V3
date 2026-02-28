type UiCardProps = {
  children: string;
  className?: string;
  tag?: "article" | "div" | "section";
};

export function UiCard({ children, className = "", tag = "article" }: UiCardProps) {
  return `<${tag} class="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm ${className}">${children}</${tag}>`;
}
