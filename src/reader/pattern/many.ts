import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ManyPattern<T> extends Pattern<Node<T>[]> {
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

  public exec(str: string, index: number): Node<Node<T>[]> | undefined {
    let res = this.pattern.exec(str, index);
    if (!res) return; // failure

    const start = index;
    let sepRes: Node | undefined;
    const data: Node<T>[] = [];

    while (res) {
      data.push(res);
      index = res.end;
      sepRes = this.separator.exec(str, res.end);
      if (!sepRes) break;
      res = this.pattern.exec(str, sepRes.end);
    }
    if (this.lastSeparator) {
      sepRes = this.lastSeparator.exec(str, index);
      if (sepRes) {
        res = this.pattern.exec(str, sepRes.end);
        if (res) {
          data.push(res);
          index = res.end;
        }
        else if (data.length !== 1) {
          return; // failure
        }
      }
      else if (data.length !== 1) {
        return sepRes;
      }
    }

    return { start, end: index, data };
  }
}
