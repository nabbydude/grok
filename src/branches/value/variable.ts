import { Pattern, r } from "@/r";

import { VariableValue } from "@/types/value";

import { parseVariable } from "@/branches/variable";

export const parseVariableValue: Pattern<VariableValue> = parseVariable.as(
  variable => <VariableValue>{ type: "variable", variable }
);
