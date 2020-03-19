import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class MappedPattern<T, F> extends Pattern<T> {
  private pattern: Pattern<F>;
  private mapper: (handles: F, node: Node<F>) => T;

  // tslint:disable-next-line:max-line-length
  public constructor(pattern: Pattern<F>, mapper: (handles: F, node: Node<F>) => T) {
    super();
    this.pattern = pattern;
    this.mapper = mapper;
  }

  public exec(str: string, index: number): Node<T> | undefined {
    const res = this.pattern.exec(str, index);
    if (!res) return; // failure

    // tslint:disable-next-line:max-line-length
    return { start: res.start, end: res.end, data: this.mapper(res.data, res) };
  }
}
