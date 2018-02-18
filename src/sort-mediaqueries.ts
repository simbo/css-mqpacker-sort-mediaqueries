import { resolveMediaquery } from './resolve-mediaquery';
import { compareValues } from './compare-values';

/**
 * Sorts mediaqueries by min-width and/or max-width, ordered ascending
 * (to be used as sort option value for postcss plugin css-mqpacker)
 */

export function sortMediaqueries(
  valueA: string,
  valueB: string
): number {
  const a = resolveMediaquery(valueA);
  const b = resolveMediaquery(valueB);
  if (a === null && b === null) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  if (a.min && b.min) {
    return compareValues(a.min, b.min, () => compareValues(a.max, b.max));
  }
  if (a.min && b.max) return compareValues(a.min, b.max);
  if (a.max && b.min) return compareValues(a.max, b.min);
  return compareValues(a.max, b.max);
}
