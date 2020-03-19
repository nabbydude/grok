import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class DeferredPattern<T> extends Pattern<T> {
  private factory: () => Pattern<T>;

  public constructor(factory: () => Pattern<T>) {
    super();
    this.factory = factory;
  }

  public exec(str: string, index: number): Node<T> | undefined {
    const pattern = this.factory();

    return pattern.exec(str, index);
  }
}
