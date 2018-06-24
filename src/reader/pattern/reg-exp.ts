import { Result } from "@/reader/result";

import { Pattern } from "@/reader/pattern/_";

export class RegExpPattern extends Pattern<RegExpExecArray> {
  private regExp: RegExp;
  public constructor(regExp: RegExp) {
    super();
    this.regExp = new RegExp(regExp, regExp.flags + "y");
  }

  public exec(str: string, index: number): Result<RegExpExecArray> {
    this.regExp.lastIndex = index;
    const payload = this.regExp.exec(str);

    return payload ? (
      { success: true, end: this.regExp.lastIndex, payload }
     ) : (
      { success: false }
     );
  }
}
