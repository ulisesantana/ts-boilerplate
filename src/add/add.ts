export function add (...numbers: number[]): number {
  return numbers.reduce((total, x) => total + x, 0)
}
