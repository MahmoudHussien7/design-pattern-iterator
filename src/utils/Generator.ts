export function* rangeGenerator(
  start: number,
  end: number,
  step: number
): Generator<number> {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
