import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ListPattern<T> extends Pattern<Node<T>[]> {
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

  public exec(str: string, index: number): Node<Node<T>[]> | undefined {
    if (this.patterns.length < 1) return; // failure
    const start = index;
    const data: Node<T>[] = [];
    let res = this.patterns[0].exec(str, index);
    let i = 1;
    for (; !res; i++) {
      if (i >= this.patterns.length) return; // failure
      res = this.patterns[i].exec(str, index);
    }
    let sepRes: Node | undefined;
    OUTER: while (res) {
      data.push(res);
      index = res.end;
      sepRes = this.separator.exec(str, res.end);
      if (!sepRes) break;
      res = this.patterns[i].exec(str, index);
      let j = i + 1;
      for (; !res; j++) {
        if (j >= this.patterns.length) break OUTER;
        res = this.patterns[j].exec(str, index);
      }
      i = j;
    }
    if (this.lastSeparator) {
      sepRes = this.lastSeparator.exec(str, index);
      if (sepRes) {
        while (true) {
          res = this.patterns[i].exec(str, index);
          i++;
          if (res) {
            data.push(res);
            index = res.end;
            break;
          }
          if (i >= this.patterns.length) {
            if (data.length !== 1) return; // failure
            break;
          }
        }
      } else if (data.length !== 1) {
        return sepRes;
      }
    }

    return { start, end: index, data };
  }
}
