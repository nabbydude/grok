import { Pattern, r } from "@/r";

import { ComparisonCondition } from "@/types/condition";
import { AttributeObjectQualifier } from "@/types/object-qualifier";

export const parseColoredObjectQualifier: Pattern<AttributeObjectQualifier> = (
  r.anyOf(
    r`colorless`.as(_ => <ComparisonCondition>{
      operator: "=",
      value: { type: "constant", value: 0 }
    }),
    r`colored`.as(_ => <ComparisonCondition>{
      operator: ">",
      value: { type: "constant", value: 0 }
    }),
    r`monocolored`.as(_ => <ComparisonCondition>{
      operator: "=",
      value: { type: "constant", value: 1 }
    }),
    r`multicolored`.as(_ => <ComparisonCondition>{
      operator: ">",
      value: { type: "constant", value: 1 }
    })
  ).as(condition => <AttributeObjectQualifier>{
    type: "attribute",
    attribute: "colors",
    condition
  })
);
