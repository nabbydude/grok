import { Pattern, r } from "@/r";

import { ComparisonCondition } from "@/types/condition";
import { CounterObjectQualifier } from "@/types/object-qualifier";

import { parseCondition } from "@/branches/condition";
import { parseCounterName } from "@/branches/counter-name";
import { parseValue } from "@/branches/value/_";

export const parseCounterWithObjectQualifier: (
  Pattern<CounterObjectQualifier>
) = r.defer(() => r`${r.anyOf(
  parseCondition,
  parseValue.as((_, value) => <ComparisonCondition>{
    type: "comparison",
    // TODO: fix hack
    operator: { start: value.start, end: value.end, data: ">=" },
    value
  })
)} ${r.anyOf(
  r`${parseCounterName} `.as(([counterName]) => counterName.data),
  r``.as(_ => undefined)
)}counters? on (it|them)`.as(
  ([condition, counterName]) => <CounterObjectQualifier>{
    type: "counter",
    counterName,
    condition
  }
));
