import { Pattern } from "@/reader/pattern/_";

export type PatternTuple<T extends unknown[]> = (
  // tslint:disable:max-line-length no-shadowed-variable
  T extends [infer U0, infer U1, infer U2, infer U3, infer U4, infer U5, infer U6, infer U7, infer U8, infer U9] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>, Pattern<U3>, Pattern<U4>, Pattern<U5>, Pattern<U6>, Pattern<U7>, Pattern<U8>, Pattern<U9>] :
  T extends [infer U0, infer U1, infer U2, infer U3, infer U4, infer U5, infer U6, infer U7, infer U8          ] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>, Pattern<U3>, Pattern<U4>, Pattern<U5>, Pattern<U6>, Pattern<U7>, Pattern<U8>             ] :
  T extends [infer U0, infer U1, infer U2, infer U3, infer U4, infer U5, infer U6, infer U7                    ] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>, Pattern<U3>, Pattern<U4>, Pattern<U5>, Pattern<U6>, Pattern<U7>                          ] :
  T extends [infer U0, infer U1, infer U2, infer U3, infer U4, infer U5, infer U6                              ] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>, Pattern<U3>, Pattern<U4>, Pattern<U5>, Pattern<U6>                                       ] :
  T extends [infer U0, infer U1, infer U2, infer U3, infer U4, infer U5                                        ] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>, Pattern<U3>, Pattern<U4>, Pattern<U5>                                                    ] :
  T extends [infer U0, infer U1, infer U2, infer U3, infer U4                                                  ] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>, Pattern<U3>, Pattern<U4>                                                                 ] :
  T extends [infer U0, infer U1, infer U2, infer U3                                                            ] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>, Pattern<U3>                                                                              ] :
  T extends [infer U0, infer U1, infer U2                                                                      ] ? [Pattern<U0>, Pattern<U1>, Pattern<U2>                                                                                           ] :
  T extends [infer U0, infer U1                                                                                ] ? [Pattern<U0>, Pattern<U1>                                                                                                        ] :
  T extends [infer U0                                                                                          ] ? [Pattern<U0>                                                                                                                     ] :
  // tslint:enable
  T extends (infer U)[] ? Pattern<U>[] :
  never
);
