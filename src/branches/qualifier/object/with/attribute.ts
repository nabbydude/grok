import { Pattern, r } from "@/r";

import { ComparisonCondition } from "@/types/condition";
import { AttributeObjectQualifier } from "@/types/object-qualifier";

import { parseCondition } from "@/branches/condition";
import { parseValue } from "@/branches/value/_";

export const parseAttributeWithObjectQualifier: (
  Pattern<AttributeObjectQualifier>
) = r.defer(() => r`${r.anyOf(
  r`converted mana cost`.as(_ => <"convertedManaCost">"convertedManaCost"),
  r`power`.as(_ => <"power">"power"),
  r`toughness`.as(_ => <"toughness">"toughness")
)} ${r.anyOf(
    parseCondition,
    parseValue.as((_, value) => <ComparisonCondition>{
      type: "comparison",
      // TODO: fix hack
      operator: { start: value.start, end: value.end, data: ">=" },
      value
    })
)}`.as(([attribute, condition]) => <AttributeObjectQualifier>{
  type: "attribute",
  attribute,
  condition
}));
