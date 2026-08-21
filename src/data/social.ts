/**
 * Social and external links for the portfolio.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Icon slug for Phosphor
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/alfiedafa3",
    icon: "github-logo",
  },
  // LinkedIn: add when URL is confirmed
  // {
  //   label: "LinkedIn",
  //   href: "",
  //   icon: "linkedin-logo",
  // },
];
