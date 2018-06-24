import { Scope } from "@/types/scope";

export type Spread = EachSpread | DividedSpread;

export interface EachSpread {
  type: "each";
}

export type DividedSpread = EvenlyDividedSpread | ChoiceDividedSpread;

export interface EvenlyDividedSpread {
  type: "divided";
  dividedType: "evenly";
  evenlyDirection: "up" | "down";
}

export interface ChoiceDividedSpread {
  type: "divided";
  dividedType: "choice";
  by: Scope;
}
