import { Node } from "@/reader/result";

import { Action } from "@/types/action";
import { Mana } from "@/types/general";

export interface Cost {
  type: string;
}

export interface AndCost extends Cost {
  type: "and";
  costs: Node<Cost>[];
}

export interface OrCost extends Cost {
  type: "or";
  costs: Node<Cost>[];
}

export interface ManaCost extends Cost {
  type: "mana";
  mana: Node<Mana>;
}

export interface ActionCost extends Cost {
  type: "action";
  action: Node<Action>;
}

export interface TapCost extends Cost {
  type: "tap";
}

export interface UntapCost extends Cost {
  type: "untap";
}
