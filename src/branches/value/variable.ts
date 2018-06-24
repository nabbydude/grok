import { r } from "@/r";

import { VariableValue } from "@/types/value";

import { parseVariable } from "@/branches/variable";

export const parseVariableValue = parseVariable.as(
  variable => <VariableValue>{ type: "variable", variable }
);
