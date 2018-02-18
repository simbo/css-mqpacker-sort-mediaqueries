/**
 * compare two number values with optional fallback function in case both values
 * are equal
 */

export function compareValues(
  x: number,
  y: number,
  fallback: () => number = null
): number {
  if (x === null && y === null) return 0;
  if (x === null) return -1
  if (y === null) return 1;
  if (x > y) return 1;
  if (x < y) return -1;
  if (fallback) return fallback();
  return 0;
}
