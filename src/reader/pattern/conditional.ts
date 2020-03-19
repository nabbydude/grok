import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class ConditionalPattern<T> extends Pattern<T> {
  private pattern: Pattern<T>;
  private condition: (payload: T) => boolean;

  public constructor(pattern: Pattern<T>, condition: (payload: T) => boolean) {
    super();
    this.pattern = pattern;
    this.condition = condition;
  }

  public exec(str: string, index: number): Node<T> | undefined {
    const res = this.pattern.exec(str, index);
    if (!res) return; // failure

    return this.condition(res.data) ? res : undefined;
  }
}
