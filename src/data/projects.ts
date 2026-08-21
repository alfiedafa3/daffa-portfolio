/**
 * Project data for the portfolio.
 * Only includes confirmed, real projects. Unknowns are structurally ready but not rendered as facts.
 */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "active" | "archived" | "concept";
  link?: string;
  github?: string;
  image?: string; // Placeholder path, not a fake screenshot
}

export const PROJECTS: Project[] = [
  {
    id: "twous",
    name: "TwoOfUs",
    tagline: "AI-assisted relationship companion",
    description:
      "A private AI companion designed around reflection, contextual understanding, missions, and recurring insights. Built to support genuine connection through thoughtful, personalised interaction.",
    stack: ["Next.js", "TypeScript", "Supabase", "AI Integration"],
    status: "active",
    image: "/projects/twous-placeholder.png",
  },
];
