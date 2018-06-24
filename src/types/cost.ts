import { Action } from "@/types/action";
import { Mana } from "@/types/general";

export interface Cost {
  type: string;
}

export interface AndCost extends Cost {
  type: "and";
  costs: Cost[];
}

export interface OrCost extends Cost {
  type: "or";
  costs: Cost[];
}

export interface ManaCost extends Cost {
  type: "mana";
  mana: Mana;
}

export interface ActionCost extends Cost {
  type: "action";
  action: Action;
}

export interface TapCost extends Cost {
  type: "tap";
}

export interface UntapCost extends Cost {
  type: "untap";
}
