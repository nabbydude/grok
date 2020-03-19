import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class AnyOfPattern<T> extends Pattern<T> {
  private patterns: Pattern<T>[];

  public constructor(patterns: Pattern<T>[]) {
    super();
    this.patterns = patterns;
  }

  public exec(str: string, index: number): Node<T> | undefined {
    for (const p of this.patterns) {
      const res = p.exec(str, index);
      if (res) return res;
    }

    return; // failure
  }
}
