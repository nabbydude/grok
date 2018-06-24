import { Result } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ManyPattern<T> extends Pattern<T[]> {
  private pattern: Pattern<T>;
  private separator: Pattern;
  private lastSeparator?: Pattern;

  public constructor(
    pattern: Pattern<T>,
    separator: Pattern,
    lastSeparator?: Pattern
  ) {
    super();
    this.pattern = pattern;
    this.separator = separator;
    this.lastSeparator = lastSeparator;
  }

  public exec(str: string, index: number): Result<T[]> {
    let res = this.pattern.exec(str, index);
    if (!res.success) return res;
    let sepRes: Result;
    const payload: T[] = [];
    while (res.success) {
      payload.push(res.payload);
      index = res.end;
      sepRes = this.separator.exec(str, res.end);
      if (!sepRes.success) break;
      res = this.pattern.exec(str, sepRes.end);
    }
    if (this.lastSeparator) {
      sepRes = this.lastSeparator.exec(str, index);
      if (sepRes.success) {
        res = this.pattern.exec(str, sepRes.end);
        if (res.success) {
          payload.push(res.payload);
          index = res.end;
        }
        else if (payload.length !== 1) {
          return res;
        }
      }
      else if (payload.length !== 1) {
        return sepRes;
      }
    }

    return { success: true, end: index, payload };
  }
}
