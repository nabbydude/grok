import { ObjectAttribute, Variable } from "@/types/general";
import { Scope } from "@/types/scope";

interface ValueBase {
  type: string;
}

//#region Defs

export interface AggregateValue extends ValueBase {
  type: "aggregate";
  aggregate: "total" | "highest" | "lowest";
  attribute: ObjectAttribute;
  scope: Scope;
}

export interface AttributeValue extends ValueBase {
  type: "attribute";
  attribute: ObjectAttribute;
  scope: Scope;
}

export interface ConstantValue extends ValueBase {
  type: "constant";
  value: number;
}

export interface CountValue extends ValueBase {
  type: "count";
  scope: Scope;
}

export interface ThatValue extends ValueBase {
  type: "that";
}

export interface VariableValue extends ValueBase {
  type: "variable";
  variable: Variable;
}

//#endregion

export type Value = (
  AggregateValue |
  AttributeValue |
  ConstantValue  |
  CountValue     |
  ThatValue      |
  VariableValue
);
