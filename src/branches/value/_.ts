import { Pattern, r } from "@/r";

import { Value } from "@/types/value";

import { parseAggregateValue } from "@/branches/value/aggregate";
import { parseAttributeValue } from "@/branches/value/attribute";
import { parseConstantValue  } from "@/branches/value/constant";
import { parseCountValue     } from "@/branches/value/count";
import { parseThatValue      } from "@/branches/value/that";
import { parseVariableValue  } from "@/branches/value/variable";

export const parseValue: Pattern<Value> = r.anyOf<Value>(
  parseAggregateValue,
  parseAttributeValue,
  parseConstantValue,
  parseCountValue,
  parseThatValue,
  parseVariableValue
);
