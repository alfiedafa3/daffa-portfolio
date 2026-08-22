/**
 * Project data for the portfolio.
 * Only includes confirmed, real projects.
 */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  architecture: string[];
  status: "active" | "archived" | "concept";
  /** Public live URL — only shown when deployed and verified */
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "twous",
    name: "TwoOfUs",
    tagline: "Private AI relationship companion",
    description:
      "A private AI-assisted relationship companion focused on reflection, contextual understanding, missions, and recurring insights. AI is not a judge. It supports reflection and understanding.",
    role: "Product concept, frontend development, AI workflow design",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    architecture: ["Supabase", "OpenRouter AI", "RLS", "Server-side AI"],
    status: "active",
  },
];
