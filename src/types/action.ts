import { Node } from "@/reader/result";

import { Scope } from "@/types/scope";
import { Spread } from "@/types/spread";
import { Value } from "@/types/value";

export interface Action {
  type: string;
}

export interface AttachAction extends Action {
  type: "attach";
  attacher: Node<Scope>;
  attachee: Node<Scope>;
}

export interface BolsterAction extends Action {
  type: "bolster";
  value: Node<Value>;
}

export interface DamageAction extends Action {
  type: "damage";
  source: Node<Scope>;
  amount: Node<Value>;
  spread: Node<Spread>;
  scope: Node<Scope>;
}

export interface DrawAction extends Action {
  type: "draw";
  amount: Node<Value>;
}

export interface FatesealAction extends Action {
  type: "fateseal";
  value: Node<Value>;
}

export interface GainLifeAction extends Action {
  type: "gainLife";
  amount: Node<Value>;
}

export interface InvestigateAction extends Action {
  type: "investigate";
}

export interface LoseLifeAction extends Action {
  type: "loseLife";
  amount: Node<Value>;
}

export interface MonstrosityAction extends Action {
  type: "monstrosity";
  value: Node<Value>;
}

export interface PopulateAction extends Action {
  type: "populate";
}

export interface ProliferateAction extends Action {
  type: "proliferate";
}

export interface ScryAction extends Action {
  type: "scry";
  value: Node<Value>;
}

export interface SupportAction extends Action {
  type: "support";
  value: Node<Value>;
}

export interface ScopedAction extends Action {
  type: "scoped";
  actions: Node<Node<(
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
  )>[]>;
  scope: Node<Scope>;
}
