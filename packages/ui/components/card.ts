type UiCardProps = {
  children: string;
  className?: string;
  style?: string;
  tag?: "article" | "div" | "section";
};

export function UiCard({
  children,
  className = "",
  style = "",
  tag = "article",
}: UiCardProps) {
  return `<${tag} class="rounded-2xl border border-white/5 bg-[#110f0e] p-6 ${className}"${style ? ` style="${style}"` : ""}>${children}</${tag}>`;
}
