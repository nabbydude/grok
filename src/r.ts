import { Pattern       } from "@/reader/pattern/_";
import { AnyOfPattern  } from "@/reader/pattern/any-of";
import { ChainPattern  } from "@/reader/pattern/chain";
import { DeferredPattern } from "@/reader/pattern/deferred";
import { ListPattern   } from "@/reader/pattern/list";
import { ManyPattern   } from "@/reader/pattern/many";
import { RegExpPattern } from "@/reader/pattern/reg-exp";
import { DePatternTuple, PatternTuple } from "@/reader/pattern/util";

interface Reader {
  // tslint:disable-next-line:max-line-length
  <T extends Pattern[]>(strings: ReadonlyArray<string>, ...patterns: T): ChainPattern<T>;
  anyOf<T>(...patterns: Pattern<T>[]): AnyOfPattern<T>;
  list<T>(
    patterns: Pattern<T>[],
    separator: Pattern,
    lastSeparator?: Pattern
  ): ListPattern<T>;
  many<T>(
    pattern: Pattern<T>,
    separator: Pattern,
    lastSeparator?: Pattern
  ): ManyPattern<T>;
  reg(regExp: RegExp): RegExpPattern;
  defer<T>(factory: () => Pattern<T>): DeferredPattern<T>;
}

// tslint:disable-next-line:max-line-length
function ReaderFunction<T extends Pattern[]>(strings: ReadonlyArray<string>, ...patterns: T): ChainPattern<T> {
  return new ChainPattern<T>(strings, patterns);
}

const utilFunctions = {
  anyOf<T>(...patterns: Pattern<T>[]) {
    return new AnyOfPattern(patterns);
  },
  list<T>(
    patterns: Pattern<T>[],
    separator: Pattern,
    lastSeparator?: Pattern
  ): ListPattern<T> {
    return new ListPattern(patterns, separator, lastSeparator);
  },
  many<T>(
    pattern: Pattern<T>,
    separator: Pattern,
    lastSeparator?: Pattern
  ): ManyPattern<T> {
    return new ManyPattern(pattern, separator, lastSeparator);
  },
  reg(regExp: RegExp): RegExpPattern {
    return new RegExpPattern(regExp);
  },
  defer<T>(factory: () => Pattern<T>): DeferredPattern<T> {
    return new DeferredPattern(factory);
  }
};

// tslint:disable-next-line:prefer-object-spread
export const r: Reader = Object.assign(ReaderFunction, utilFunctions);

export { Pattern } from "@/reader/pattern/_";
