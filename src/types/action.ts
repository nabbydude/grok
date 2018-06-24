import { Scope } from "@/types/scope";
import { Spread } from "@/types/spread";
import { Value } from "@/types/value";

export interface Action {
  type: string;
}

export interface AttachAction extends Action {
  type: "attach";
  attacher: Scope;
  attachee: Scope;
}

export interface BolsterAction extends Action {
  type: "bolster";
  value: Value;
}

export interface DamageAction extends Action {
  type: "damage";
  source: Scope;
  amount: Value;
  spread: Spread;
  scope: Scope;
}

export interface DrawAction extends Action {
  type: "draw";
  amount: Value;
}

export interface FatesealAction extends Action {
  type: "fateseal";
  value: Value;
}

export interface GainLifeAction extends Action {
  type: "gainLife";
  amount: Value;
}

export interface InvestigateAction extends Action {
  type: "investigate";
}

export interface LoseLifeAction extends Action {
  type: "loseLife";
  amount: Value;
}

export interface MonstrosityAction extends Action {
  type: "monstrosity";
  value: Value;
}

export interface PopulateAction extends Action {
  type: "populate";
}

export interface ProliferateAction extends Action {
  type: "proliferate";
}

export interface ScryAction extends Action {
  type: "scry";
  value: Value;
}

export interface SupportAction extends Action {
  type: "support";
  value: Value;
}

export interface ScopedAction extends Action {
  type: "scoped";
  actions: (
    "counter" |
    "destroy" |
    "detain" |
    "exile" |
    "goad" |
    "manifest" |
    "reveal" |
    "tap" |
    "transform" |
    "unattach" |
    "untap"
  )[];
  scope: Scope;
}
