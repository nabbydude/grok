import { r } from "@/r";

import { ComparisonCondition, Condition, InCondition } from "@/types/condition";

import { parseValue } from "@/branches/value/_";

export const parseCondition = r.anyOf<Condition>(
  r`${r.anyOf(
    r`up to|less than or equal to`.as(_ => <"<=">"<="),
    r`greater than or equal to`.as(_ => <">=">">="),
    r`less than`.as(_ => <"<">"<"),
    r`greater than`.as(_ => <">">">"),
    r`equal to`.as(_ => <"=">"=")
  )} ${parseValue}`.as(
    ([operator, value]) => <ComparisonCondition>{ operator, value }
  ),
  r`${parseValue} or ${r.anyOf(
    r`less|fewer`.as(_ => <"<=">"<="),
    r`greater|more`.as(_ => <">=">">=")
  )}`.as(([value, operator]) => <ComparisonCondition>{ operator, value }),
  r`any number of`.as(_ => <ComparisonCondition>{
    operator: ">=",
    value: { type: "constant", value: 0 }
  }),
  r.many(parseValue, r`, `, r`,? or `).as(
    values => values.length > 1 ? (
      <InCondition>{ operator: "in", values }
    ) : (
      <ComparisonCondition>{ operator: "=", value: values[0] }
    )
  )
);
