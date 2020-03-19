import { Pattern } from "@/reader/pattern/_";
import { Node } from "@/reader/result";

export type PatternTuple<T extends unknown[]> = {
  [P in keyof T]: Pattern<T[P]>;
};

export type DePatternTuple<T extends Pattern[]> = {
  [P in keyof T]: T[P] extends Pattern<infer U> ? U : never;
};

export type NodeTuple<T extends unknown[]> = {
  [P in keyof T]: Node<T[P]>;
};
