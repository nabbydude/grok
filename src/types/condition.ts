import { Node } from "@/reader/result";

import { Value } from "@/types/value";

interface ConditionBase {
  type: string;
}

export interface AnyCondition extends ConditionBase {
  type: "any";
}

export interface ComparisonCondition extends ConditionBase {
  type: "comparison";
  operator: Node<"<" | "<=" | "=" | ">=" | ">">;
  value: Node<Value>;
}

export interface InCondition extends ConditionBase {
  type: "in";
  values: Node<Value>[];
}

export type Condition = AnyCondition | ComparisonCondition | InCondition;
