/**
 * Normalizes text for fuzzy answer matching.
 * - Converts to lowercase
 * - Removes diacritics/accents (e.g., "ã" → "a", "é" → "e")
 * - Trims whitespace and collapses internal spaces
 *
 * Examples:
 *   normalizeText("Mãe")  === "mae"
 *   normalizeText("MÃE")  === "mae"
 *   normalizeText("  mae ") === "mae"
 *   normalizeText("café")  === "cafe"
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

/**
 * Returns true if two strings match after normalization.
 */
export function textsMatch(a: string, b: string): boolean {
  return normalizeText(a) === normalizeText(b);
}
