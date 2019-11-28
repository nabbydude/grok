import { Pattern } from "@/reader/pattern/_";

export type PatternTuple<T extends unknown[]> = {
  [P in keyof T]: Pattern<T[P]>;
};

export type DePatternTuple<T extends Pattern[]> = {
  [P in keyof T]: T[P] extends Pattern<infer U> ? U : never;
};
