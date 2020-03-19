import { Node } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class RegExpPattern extends Pattern<RegExpExecArray> {
  private regExp: RegExp;
  public constructor(regExp: RegExp) {
    super();
    this.regExp = new RegExp(regExp, regExp.flags + "y");
  }

  public exec(str: string, index: number): Node<RegExpExecArray> | undefined {
    this.regExp.lastIndex = index;
    const data = this.regExp.exec(str);

    // tslint:disable-next-line:max-line-length
    return data ? { start: index, end: this.regExp.lastIndex, data } : undefined;
  }
}
