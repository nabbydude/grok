import { Result } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ConditionalPattern<T> extends Pattern<T> {
  private pattern: Pattern<T>;
  private condition: (payload: T) => boolean;

  public constructor(pattern: Pattern<T>, condition: (payload: T) => boolean) {
    super();
    this.pattern = pattern;
    this.condition = condition;
  }

  public exec(str: string, index: number): Result<T> {
    const res = this.pattern.exec(str, index);
    if (!res.success) return res;

    return this.condition(res.payload) ? res : { success: false };
  }
}
