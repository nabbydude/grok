import { Node } from "@/reader/result";

import { Condition } from "@/types/condition";
import { ObjectQualifier } from "@/types/object-qualifier";

interface ScopeBase {
  type: string;
}
export interface EverythingScope extends ScopeBase {
  type: "everything";
}

export interface QualifiedObjectScope extends ScopeBase {
  type: "object";
  qualifiers: Node<Node<ObjectQualifier>[]>[];
}

export interface TargetScope extends ScopeBase {
  type: "target";
  amount: Node<Condition>;
  scope: Node<Scope>;
}

export interface AndScope extends ScopeBase {
  type: "and";
  scopes: Node<Scope>[];
}

export type Scope = (
  AndScope        |
  EverythingScope |
  QualifiedObjectScope  |
  TargetScope
);
