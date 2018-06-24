import { Value } from "@/types/value";

export type Condition = ComparisonCondition | InCondition;

export interface ComparisonCondition {
  operator: "<" | "<=" | "=" | ">=" | ">";
  value: Value;
}

export interface InCondition {
  operator: "in";
  values: Value[];
}
