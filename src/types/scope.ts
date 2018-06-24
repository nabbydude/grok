import { Condition } from "@/types/condition";
import { ObjectQualifier } from "@/types/object-qualifier";

interface ScopeBase {
  type: string;
}
export interface EverythingScope extends ScopeBase {
  type: "everything";
}

export interface AllObjectScope extends ScopeBase {
  type: "object";
  qualifier: ObjectQualifier;
}

export interface TargetScope extends ScopeBase {
  type: "target";
  amount: Condition;
  scope: Scope;
}

export type Scope = (
  EverythingScope |
  AllObjectScope  |
  TargetScope
);
