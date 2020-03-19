import { Node } from "@/reader/result";

import { ObjectAttribute, Variable } from "@/types/general";
import { Scope } from "@/types/scope";

interface ValueBase {
  type: string;
}

//#region Defs

export interface AggregateValue extends ValueBase {
  type: "aggregate";
  aggregate: Node<"total" | "highest" | "lowest">;
  attribute: Node<ObjectAttribute>;
  scope: Node<Scope>;
}

export interface AttributeValue extends ValueBase {
  type: "attribute";
  attribute: Node<ObjectAttribute>;
  scope: Node<Scope>;
}

export interface ConstantValue extends ValueBase {
  type: "constant";
  value: number;
}

export interface CountValue extends ValueBase {
  type: "count";
  scope: Node<Scope>;
}

export interface ThatValue extends ValueBase {
  type: "that";
}

export interface VariableValue extends ValueBase {
  type: "variable";
  variable: Node<Variable>;
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
