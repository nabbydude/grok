import { DePatternTuple, PatternTuple } from "@/reader/pattern/util";

import { Result } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ChainPattern<
  T extends Pattern[]
> extends Pattern<DePatternTuple<T>> {
  private strings: ReadonlyArray<string>;
  private patterns: T;

  public constructor(
    strings: ReadonlyArray<string>,
    patterns: T
  ) {
    super();
    this.strings = strings;
    this.patterns = patterns;
  }

  public exec(str: string, index: number): Result<DePatternTuple<T>> {
    const payload = [];
    let reg: RegExp;
    if (this.strings[0] !== "") {
      reg = new RegExp(this.strings[0], "iy");
      reg.lastIndex = index;
      if (!reg.test(str)) return { success: false };
      index = reg.lastIndex;
    }
    for (let i = 0; i < this.patterns.length; i++) {
      const p = this.patterns[i];
      const res = p.exec(str, index);
      if (!res.success) return res;
      payload[i] = res.payload;
      if (this.strings[i + 1] !== "") {
        reg = new RegExp(this.strings[i + 1], "iy");
        reg.lastIndex = res.end;
        if (!reg.test(str)) return { success: false };
        index = reg.lastIndex;
      }
    }

    return { success: true, end: index, payload: <DePatternTuple<T>>payload };
  }
}
