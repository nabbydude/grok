import { r } from "@/r";

import { CounterObjectQualifier } from "@/types/object-qualifier";

import { parseCondition } from "@/branches/condition";
import { parseCounterName } from "@/branches/counter-name";

export const parseCounterWithObjectQualifier = r`${parseCondition} ${r.anyOf(
  r`${parseCounterName} `.as(([counterName]) => counterName),
  r``.as(_ => undefined)
)}counters? on (it|them)`.as(
  ([condition, counterName]) => <CounterObjectQualifier>{
    type: "counter",
    counterName,
    condition
  }
);
