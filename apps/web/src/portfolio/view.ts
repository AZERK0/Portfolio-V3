import { UiBadge } from "@repo/ui/badge";
import { UiButton } from "@repo/ui/button";
import { UiCard } from "@repo/ui/card";

import { portfolioData } from "./data";

function renderSectionTitle(title: string, rightContent: string) {
  return `<div class="flex items-center justify-between px-1"><h2 class="text-xl font-semibold">${title}</h2>${rightContent}</div>`;
}

function renderHeader() {
  return `<header class="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl"><div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"><p class="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-300">${portfolioData.firstName}.<span class="text-amber-300">${portfolioData.lastName}</span></p><div class="hidden items-center gap-2 sm:flex">${UiBadge({ label: portfolioData.availability, tone: "accent" })}</div></div></header>`;
}

function renderHero() {
  return `<section class="rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/95 to-amber-500/75 p-8 text-zinc-950 lg:col-span-3"><p class="inline-flex rounded-full border border-zinc-950/10 bg-zinc-950/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">${portfolioData.jobTitle}</p><h1 class="mt-5 text-4xl font-black uppercase leading-[0.95] sm:text-5xl">${portfolioData.heroTitle}</h1><p class="mt-6 max-w-2xl text-base font-medium text-zinc-900/80">${portfolioData.about}</p><div class="mt-8 flex flex-wrap items-center gap-3">${UiButton({ href: portfolioData.ctaUrl, label: portfolioData.ctaLabel })}${UiButton({ href: "#projects", label: "Voir les projets", variant: "ghost" })}</div></section>`;
}

function renderProfileCard() {
  return `<section class="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 p-2 lg:col-span-1"><div class="relative h-full min-h-72 overflow-hidden rounded-[1.35rem]"><img src="${portfolioData.portraitUrl}" alt="${portfolioData.fullName}" class="absolute inset-0 h-full w-full object-cover" /><div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent"></div><div class="absolute bottom-0 w-full p-5"><p class="text-lg font-semibold">${portfolioData.fullName}</p><p class="text-sm text-zinc-300">${portfolioData.city}</p></div></div></section>`;
}

function renderStats() {
  const content = portfolioData.stats
    .map((stat) => {
      const cardContent = `<p class="text-sm text-zinc-400">${stat.label}</p><p class="mt-2 text-2xl font-bold text-zinc-100">${stat.value}</p>`;
      return UiCard({ children: cardContent, className: "p-5" });
    })
    .join("");

  return `<section class="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">${content}</section>`;
}

function renderEducationAndStack() {
  const educationCards = portfolioData.educations
    .map((education) => {
      const cardContent = `<p class="text-xs uppercase tracking-[0.18em] text-zinc-500">${education.period}</p><h3 class="mt-3 text-lg font-semibold text-zinc-100">${education.school}</h3><p class="mt-1 text-sm text-zinc-400">${education.degree}</p>`;
      return UiCard({ children: cardContent, className: "p-5" });
    })
    .join("");

  const skills = portfolioData.skills.map((skill) => UiBadge({ label: skill.label })).join("");
  const stackCard = UiCard({
    children: `<p class="text-xs uppercase tracking-[0.18em] text-zinc-500">Core stack</p><div class="mt-4 flex flex-wrap gap-2">${skills}</div>`,
    className: "p-5",
  });

  return `<section class="grid gap-4 md:grid-cols-2 lg:col-span-4">${educationCards}${stackCard}</section>`;
}

function renderProjects() {
  const projectCards = portfolioData.projects
    .map((project) => {
      const tags = project.stack
        .map((item) => UiBadge({ className: "!text-[0.65rem] uppercase", label: item, tone: "outline" }))
        .join("");

      const cardContent = `<div class="h-28 w-28 shrink-0 overflow-hidden rounded-2xl"><img src="${project.imageUrl}" alt="${project.name}" class="h-full w-full object-cover" /></div><div class="min-w-0"><h3 class="text-lg font-semibold text-zinc-100">${project.name}</h3><p class="mt-2 text-sm text-zinc-400">${project.description}</p><div class="mt-4 flex flex-wrap gap-2">${tags}</div></div>`;
      return UiCard({ children: cardContent, className: "flex gap-4 p-4" });
    })
    .join("");

  const title = renderSectionTitle("Selected Projects", UiBadge({ label: `${portfolioData.projects.length} projets`, tone: "outline" }));
  return `<section id="projects" class="space-y-4 lg:col-span-2">${title}${projectCards}</section>`;
}

function renderExperiences() {
  const experienceCards = portfolioData.experiences
    .map((experience) => {
      const cardContent = `<p class="text-xs uppercase tracking-[0.18em] text-amber-300/80">${experience.period}</p><h3 class="mt-2 text-lg font-semibold text-zinc-100">${experience.role}</h3><p class="mt-1 text-sm font-medium text-zinc-300">${experience.company}</p><p class="mt-3 text-sm leading-relaxed text-zinc-400">${experience.summary}</p>`;
      return UiCard({ children: cardContent, className: "p-5" });
    })
    .join("");

  const dataSourceCard = UiCard({
    children:
      "<p class=\"text-sm text-zinc-400\">Data source</p><p class=\"mt-1 text-base font-semibold text-zinc-100\">Fake data for now, Firebase-ready structure.</p>",
    className: "bg-zinc-900/80 p-5",
  });

  const title = renderSectionTitle("Experience", UiBadge({ label: "Frontend first", tone: "accent" }));
  return `<section id="contact" class="space-y-4 lg:col-span-2">${title}${experienceCards}${dataSourceCard}</section>`;
}

export function renderPortfolioPage() {
  return `<div class="min-h-screen bg-[radial-gradient(circle_at_25%_20%,rgba(251,191,36,0.22),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_30%),#09090b] text-zinc-100">${renderHeader()}<main class="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4">${renderHero()}${renderProfileCard()}${renderStats()}${renderEducationAndStack()}${renderProjects()}${renderExperiences()}</main></div>`;
}
