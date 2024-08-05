class RangeIterator implements Iterator<number> {
  private First: number;
  private end: number;
  private step: number;

  constructor(start: number, end: number, step: number) {
    this.First = start;
    this.end = end;
    this.step = step;
  }

  public next(): IteratorResult<number> {
    if (this.First < this.end) {
      const value = this.First;
      this.First += this.step;
      return { value, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

export function range(
  start: number,
  end: number,
  step: number
): Iterable<number> {
  return {
    [Symbol.iterator]: () => new RangeIterator(start, end, step),
  };
}
