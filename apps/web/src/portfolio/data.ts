import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  about:
    "Frontend-first engineer crafting fast products and clean interfaces. I focus on maintainable code, intentional UX, and scalable architecture.",
  availability: "Disponible pour des missions freelance Q2 2026",
  city: "Paris",
  ctaLabel: "Discutons du projet",
  ctaUrl: "#contact",
  educations: [
    {
      degree: "MSc Computer Science",
      period: "2021 - 2026",
      school: "Epitech Digital",
    },
    {
      degree: "Baccalaureat Maths",
      period: "2021",
      school: "Lycee Victor Hugo",
    },
  ],
  experiences: [
    {
      company: "TechCorp Solutions",
      period: "2024 - Aujourd'hui",
      role: "Frontend Engineer",
      summary:
        "Migration d'un dashboard enterprise vers TypeScript strict, reduction de 38% du bundle initial et adoption de standards de design system.",
    },
    {
      company: "Studio Forme",
      period: "2022 - 2024",
      role: "Developpeur Web",
      summary:
        "Livraison de plateformes vitrines et e-commerce pour des marques premium avec un taux de conversion en hausse de 24%.",
    },
  ],
  firstName: "Alex",
  fullName: "Alex Martin",
  heroTitle: "Building the future, one line at a time.",
  jobTitle: "Frontend Engineer",
  lastName: "Martin",
  portraitUrl:
    "portrait.JPG",
  projects: [
    {
      description:
        "Design system modulaire et analytics temps reel pour piloter la performance des ventes.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDCxL7OnTTqitQov5TelGKlngPGeNXe-vHqRFNO5H39dKzsUe5MKj_wfJ9oZkpQk8Nap8LxdBJGH8Z-ygw6uvm0UEFFcbP2ITxXJ0bKBJvSR2oT1474FgXdjOQY75Z825N3bfPEbVoHPVIUylyF364eFCNeEIqH0xKw7kkqhuLqPkhgddJoZiWZPMbAXDv62di0F9GrzRpbTvg2ouAxjY-VKGsTekwTqssKTL4DjhQAKGHwiOGamUKICIf9KRPv7LihscU-0ZMdt7c",
      name: "Nexus Commerce",
      stack: ["TypeScript", "Tailwind", "Firebase"],
    },
    {
      description:
        "Application mobile de productivite avec experiences fluides, synchronisation cloud et usage offline.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDVR2nHiKPtgUS6xxpGJYE51R3Y404A8tMQYyEIK_aDpF7ks_aSv1wtZFrft5Ay9p7E97e5-DOsqoImb_tXGJebVTd2tGyUaQzbuXjqc2d7DRjyVRii1Od9O-x8cISbtGDGCxAA-2kXk5HdnAGtvGVoWGLSDhMeEzKXt9MWk8pW58zFr3tsERJmpKhInkU6Bk9cFW3HahUv60NjlPtk20tdaLPpsqfW3fj_K1_-d-CyusN6JV14neQ9oUj8Gt71ci_GEd0hi2qjpM",
      name: "TaskFlow Mobile",
      stack: ["Flutter", "Firebase", "Figma"],
    },
    {
      description:
        "Plateforme de mentoring tech avec matching IA et suivi personnalise des objectifs de progression.",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      name: "Mentor Grid",
      stack: ["Next.js", "Prisma", "PostgreSQL"],
    },
  ],
  skills: [
    { label: "TypeScript" },
    { label: "Vue / Nuxt" },
    { label: "React" },
    { label: "Tailwind" },
    { label: "Firebase" },
    { label: "Node.js" },
  ],
  stats: [
    { label: "Projets livres", value: "16+" },
    { label: "Experience", value: "4 ans" },
    { label: "Performance moyenne", value: "95+" },
    { label: "Clients satisfaits", value: "100%" },
  ],
};
