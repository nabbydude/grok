import { Result } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class MappedPattern<T, F> extends Pattern<T> {
  private pattern: Pattern<F>;
  private mapper: (handles: F) => T;

  public constructor(pattern: Pattern<F>, mapper: (handles: F) => T) {
    super();
    this.pattern = pattern;
    this.mapper = mapper;
  }

  public exec(str: string, index: number): Result<T> {
    const res = this.pattern.exec(str, index);
    if (!res.success) return res;

    return { success: true, end: res.end, payload: this.mapper(res.payload) };
  }
}
