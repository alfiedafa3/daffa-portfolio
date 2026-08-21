/**
 * Technology and capability data for the portfolio.
 * Organised by domain, not by individual skill.
 */

export interface TechDomain {
  name: string;
  description: string;
  tools: string[];
}

export const TECH_DOMAINS: TechDomain[] = [
  {
    name: "Security",
    description: "Systems thinking, threat modelling, vulnerability research",
    tools: [
      "Linux",
      "Networking",
      "Nmap",
      "Burp Suite",
      "OWASP",
      "Wireshark",
    ],
  },
  {
    name: "Engineering",
    description: "Full-stack development, API design, infrastructure",
    tools: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    name: "AI",
    description: "LLM integration, prompt engineering, intelligent systems",
    tools: ["OpenAI API", "Embeddings", "RAG", "Prompt Design"],
  },
  {
    name: "Systems",
    description: "Operating systems, networking, virtualisation, automation",
    tools: [
      "Linux",
      "Docker",
      "Shell Scripting",
      "Git",
      "CI/CD",
    ],
  },
];
