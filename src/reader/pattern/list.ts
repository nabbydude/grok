import { Result } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ListPattern<T> extends Pattern<T[]> {
  private patterns: Pattern<T>[];
  private separator: Pattern;
  private lastSeparator?: Pattern;

  public constructor(
    patterns: Pattern<T>[],
    separator: Pattern,
    lastSeparator?: Pattern
  ) {
    super();
    this.patterns = patterns;
    this.separator = separator;
    this.lastSeparator = lastSeparator;
  }

  public exec(str: string, index: number): Result<T[]> {
    if (this.patterns.length < 1) return { success: false };
    const payload: T[] = [];
    let i = 1;
    let res = this.patterns[0].exec(str, index);
    for (; !res.success; i++) {
      if (i >= this.patterns.length) return res;
      res = this.patterns[i].exec(str, index);
    }
    let sepRes: Result;
    OUTER: while (res.success) {
      payload.push(res.payload);
      index = res.end;
      sepRes = this.separator.exec(str, res.end);
      if (!sepRes.success) break;
      let j = i;
      for (; !res.success; j++) {
        if (j >= this.patterns.length) break OUTER;
        res = this.patterns[i].exec(str, index);
      }
      i = j;
    }
    if (this.lastSeparator) {
      sepRes = this.lastSeparator.exec(str, index);
      if (sepRes.success) {
        while (true) {
          res = this.patterns[i].exec(str, index);
          i++;
          if (res.success) {
            payload.push(res.payload);
            index = res.end;
            break;
          }
          if (i >= this.patterns.length) {
            if (payload.length !== 1) return res;
            break;
          }
        }
      } else if (payload.length !== 1) {
        return sepRes;
      }
    }

    return { success: true, end: index, payload };
  }
}
