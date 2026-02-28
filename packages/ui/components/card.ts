type UiCardProps = {
  children: string;
  className?: string;
  tag?: "article" | "div" | "section";
};

export function UiCard({ children, className = "", tag = "article" }: UiCardProps) {
  return `<${tag} class="rounded-2xl border border-white/5 bg-[#231a10] p-6 ${className}">${children}</${tag}>`;
}
