/**
 * resolve a mediaquery string into an object with min-width and max-width
 * values as numbers
 */

export function resolveMediaquery(query: string): { min: number, max: number } {
  const validMediaqueryPattern =
    /^(screen\sand\s)?\((min|max)-width:\s\d+px\)(\sand\s\(max-width:\s\d+px\))?$/i;
  if (!validMediaqueryPattern.test(query)) return null;
  const valuePattern = /\((min|max)-width:\s(\d+)px\)/gi;
  const matches: RegExpExecArray[] = [];
  let next: RegExpExecArray;
  while (next = valuePattern.exec(query)) {
    matches.push(next);
  }
  return matches.reduce((result, match) => {
    const type = match[1];
    const value = parseInt(match[2], 10);
    result[type] = value;
    return result;
  }, {
    min: null,
    max: null
  });
}
