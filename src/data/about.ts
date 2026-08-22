/**
 * About section data.
 * Only confirmed, factual information.
 * No invented experience, credentials, or achievements.
 */

export const ABOUT = {
  /** Section label for navigation */
  sectionLabel: "About",

  /** Primary statement - large typographic centerpiece */
  statement: {
    line1: "I learn by",
    line2: "building.",
  },

  /** Condensed narrative - editorial About copy */
  narrative: [
    "Technology builder exploring software, cybersecurity, and AI through hands-on experimentation. Learning by building: understanding systems by taking them apart and putting them back together differently.",
    "Background in digital media production: photography, videography, and editing. Shapes how he thinks about interfaces, composition, and user experience.",
  ],

  /** Education - only confirmed facts */
  education: {
    institution: "Cyber University",
    status: "Current",
  },

  /** Identity facts for sidebar/metadata */
  identity: [
    { label: "Based in", value: "Indonesia" },
    { label: "Focus", value: "Software · Security · AI" },
    { label: "Brand", value: "XEVRYN" },
  ],
} as const;

/**
 * Capability categories.
 * Clearly distinguishes hands-on from exploring/learning.
 * No fake proficiency levels, no percentage bars, no badges.
 */

export interface CapabilityItem {
  name: string;
  /** 'hands-on' = actually used/built with */
  /** 'exploring' = actively learning/developing */
  /** 'learning' = foundational study */
  status: "hands-on" | "exploring" | "learning";
}

export interface CapabilityGroup {
  label: string;
  description: string;
  items: CapabilityItem[];
  /** Visual weight for asymmetric layout */
  weight: "primary" | "secondary" | "tertiary";
}

export const CAPABILITIES: CapabilityGroup[] = [
  {
    label: "Building",
    description: "Technologies used in actual projects and experiments",
    items: [
      { name: "HTML", status: "hands-on" },
      { name: "Lua", status: "hands-on" },
      { name: "Roblox Scripting", status: "hands-on" },
    ],
    weight: "primary",
  },
  {
    label: "Exploring",
    description: "Actively developing skills through projects",
    items: [
      { name: "Software Engineering", status: "exploring" },
      { name: "AI / Systems", status: "exploring" },
    ],
    weight: "secondary",
  },
  {
    label: "Learning",
    description: "Foundational study and theory",
    items: [
      { name: "Cybersecurity Foundations", status: "learning" },
    ],
    weight: "tertiary",
  },
];

/** Status labels for display */
export const STATUS_LABELS: Record<CapabilityItem["status"], string> = {
  "hands-on": "Built with",
  exploring: "Exploring",
  learning: "Learning",
};
