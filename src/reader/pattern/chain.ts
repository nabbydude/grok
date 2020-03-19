import { DePatternTuple, NodeTuple } from "@/reader/pattern/util";

import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ChainPattern<
  T extends Pattern[]
> extends Pattern<NodeTuple<DePatternTuple<T>>> {
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

  // tslint:disable-next-line:max-line-length
  public exec(str: string, index: number): Node<NodeTuple<DePatternTuple<T>>> | undefined {
    const start = index;
    const data: Node[] = [];
    let reg: RegExp;
    if (this.strings[0] !== "") {
      reg = new RegExp(this.strings[0], "iy");
      reg.lastIndex = index;
      if (!reg.test(str)) return; // failure
      index = reg.lastIndex;
    }
    for (let i = 0; i < this.patterns.length; i++) {
      const p = this.patterns[i];
      const res = p.exec(str, index);
      if (!res) return; // failure
      data.push(res);
      if (this.strings[i + 1] !== "") {
        reg = new RegExp(this.strings[i + 1], "iy");
        reg.lastIndex = res.end;
        if (!reg.test(str)) return; // failure
        index = reg.lastIndex;
      }
    }

    return { start, end: index, data: <NodeTuple<DePatternTuple<T>>>data };
  }
}
