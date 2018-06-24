import { Result } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class AnyOfPattern<T> extends Pattern<T> {
  private patterns: Pattern<T>[];

  public constructor(patterns: Pattern<T>[]) {
    super();
    this.patterns = patterns;
  }

  public exec(str: string, index: number): Result<T> {
    for (const p of this.patterns) {
      const res = p.exec(str, index);
      if (res.success) return res;
    }

    return { success: false };
  }
}
