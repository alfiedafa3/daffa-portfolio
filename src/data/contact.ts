/**
 * Contact destinations for the portfolio.
 * Only confirmed, public channels are rendered.
 */

export interface ContactChannel {
  id: string;
  label: string;
  href: string;
  /** External links open in a new tab */
  external: boolean;
}

export const CONTACT: {
  statement: string;
  channels: ContactChannel[];
} = {
  statement:
    "Open to building, learning, and interesting conversations.",
  channels: [
    {
      id: "github",
      label: "Continue on GitHub",
      href: "https://github.com/alfiedafa3",
      external: true,
    },
  ],
};
