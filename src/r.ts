import { Pattern       } from "@/reader/pattern/_";
import { AnyOfPattern  } from "@/reader/pattern/any-of";
import { ChainPattern  } from "@/reader/pattern/chain";
import { ListPattern   } from "@/reader/pattern/list";
import { ManyPattern   } from "@/reader/pattern/many";
import { RegExpPattern } from "@/reader/pattern/reg-exp";

interface CallableReader {
  // tslint:disable:max-line-length
  <T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>, p3: Pattern<T3>, p4: Pattern<T4>, p5: Pattern<T5>, p6: Pattern<T6>, p7: Pattern<T7>, p8: Pattern<T8>, p9: Pattern<T9>): ChainPattern<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  <T0, T1, T2, T3, T4, T5, T6, T7, T8    >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>, p3: Pattern<T3>, p4: Pattern<T4>, p5: Pattern<T5>, p6: Pattern<T6>, p7: Pattern<T7>, p8: Pattern<T8>                 ): ChainPattern<[T0, T1, T2, T3, T4, T5, T6, T7, T8    ]>;
  <T0, T1, T2, T3, T4, T5, T6, T7        >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>, p3: Pattern<T3>, p4: Pattern<T4>, p5: Pattern<T5>, p6: Pattern<T6>, p7: Pattern<T7>                                  ): ChainPattern<[T0, T1, T2, T3, T4, T5, T6, T7        ]>;
  <T0, T1, T2, T3, T4, T5, T6            >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>, p3: Pattern<T3>, p4: Pattern<T4>, p5: Pattern<T5>, p6: Pattern<T6>                                                   ): ChainPattern<[T0, T1, T2, T3, T4, T5, T6            ]>;
  <T0, T1, T2, T3, T4, T5                >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>, p3: Pattern<T3>, p4: Pattern<T4>, p5: Pattern<T5>                                                                    ): ChainPattern<[T0, T1, T2, T3, T4, T5                ]>;
  <T0, T1, T2, T3, T4                    >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>, p3: Pattern<T3>, p4: Pattern<T4>                                                                                     ): ChainPattern<[T0, T1, T2, T3, T4                    ]>;
  <T0, T1, T2, T3                        >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>, p3: Pattern<T3>                                                                                                      ): ChainPattern<[T0, T1, T2, T3                        ]>;
  <T0, T1, T2                            >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>, p2: Pattern<T2>                                                                                                                       ): ChainPattern<[T0, T1, T2                            ]>;
  <T0, T1                                >(strings: ReadonlyArray<string>, p0: Pattern<T0>, p1: Pattern<T1>                                                                                                                                        ): ChainPattern<[T0, T1                                ]>;
  <T0                                    >(strings: ReadonlyArray<string>, p0: Pattern<T0>                                                                                                                                                         ): ChainPattern<[T0                                    ]>;
  // tslint:enable
  (strings: ReadonlyArray<string>): ChainPattern<never[]>;
}

interface Reader extends CallableReader {
  anyOf<T>(...patterns: Pattern<T>[]): AnyOfPattern<T>;
  list<T>(
    pattern: Pattern<T>[],
    separator: Pattern,
    lastSeparator?: Pattern
  ): ListPattern<T>;
  many<T>(
    pattern: Pattern<T>,
    separator: Pattern,
    lastSeparator?: Pattern
  ): ManyPattern<T>;
  reg(regExp: RegExp): RegExpPattern;
}

// tslint:disable:max-line-length
function ReaderFunction(
  strings: ReadonlyArray<string>,
  ...patterns: Pattern[]
): ChainPattern<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]> {
  return new ChainPattern(strings, patterns as [Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern]);
}
// tslint:enable

function anyOf<T>(...patterns: Pattern<T>[]): AnyOfPattern<T> {
  return new AnyOfPattern(patterns);
}

function list<T>(
  patterns: Pattern<T>[],
  separator: Pattern,
  lastSeparator?: Pattern
): ListPattern<T> {
  return new ListPattern(patterns, separator, lastSeparator);
}

function many<T>(
  pattern: Pattern<T>,
  separator: Pattern,
  lastSeparator?: Pattern
): ManyPattern<T> {
  return new ManyPattern(pattern, separator, lastSeparator);
}

function reg(regExp: RegExp): RegExpPattern {
  return new RegExpPattern(regExp);
}

// tslint:disable-next-line:prefer-object-spread
export const r: Reader = Object.assign(
  ReaderFunction as CallableReader,
  { anyOf, list, many, reg }
);
