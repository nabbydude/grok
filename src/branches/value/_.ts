import { r } from "@/r";

import { Value } from "@/types/value";

import { parseAggregateValue } from "./aggregate";
import { parseAttributeValue } from "./attribute";
import { parseConstantValue  } from "./constant";
import { parseCountValue     } from "./count";
import { parseThatValue      } from "./that";
import { parseVariableValue  } from "./variable";

export const parseValue = r.anyOf<Value>(
  parseAggregateValue,
  parseAttributeValue,
  parseConstantValue,
  parseCountValue,
  parseThatValue,
  parseVariableValue
);
