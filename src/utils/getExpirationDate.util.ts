const start = new Date().getFullYear() + 10;
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export function getExpirationDateMonths() {
  return Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: String(i + 1),
  })).sort();
}
export function getExpirationDateYears() {
  const years = range(start, start - 10, -1).sort((a, b) => a - b);
  return years.map((val) => ({
    id: val,
    label: String(val),
  }));
}
