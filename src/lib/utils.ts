/**
 * Utility functions for the portfolio project.
 */

/** Merge class names conditionally (lightweight clsx replacement). */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
