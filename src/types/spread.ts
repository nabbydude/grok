import { Node } from "@/reader/result";

import { RoundingDirection } from "@/types/general";
import { Scope } from "@/types/scope";

export type Spread = EachSpread | DividedSpread;

export interface EachSpread {
  type: "each";
}

export interface DividedSpread {
  type: "divided";
  division: Node<Division>;
}

interface DivisionBase {
  type: string;
}

export interface EvenDivision extends DivisionBase {
  type: "even";
  roundingDirection: Node<RoundingDirection>;
}

export interface ChoiceDivision extends DivisionBase {
  type: "choice";
  by: Node<Scope>;
}

export type Division = EvenDivision | ChoiceDivision;
