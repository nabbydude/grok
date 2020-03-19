import { Pattern, r } from "@/r";

import { VariableValue } from "@/types/value";

import { parseVariable } from "@/branches/variable";

export const parseVariableValue: Pattern<VariableValue> = (
  r.defer(() => parseVariable.as(
    (_, variable) => <VariableValue>{ type: "variable", variable }
  ))
);
