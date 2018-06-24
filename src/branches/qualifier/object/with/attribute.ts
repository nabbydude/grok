import { r } from "@/r";

import { AttributeObjectQualifier } from "@/types/object-qualifier";

import { parseCondition } from "@/branches/condition";

export const parseAttributeWithObjectQualifier = r`${r.anyOf(
  r`converted mana cost`.as(_ => <"convertedManaCost">"convertedManaCost"),
  r`power`.as(_ => <"power">"power"),
  r`toughness`.as(_ => <"toughness">"toughness")
)} ${parseCondition}`.as(([attribute, condition]) => <AttributeObjectQualifier>{
  type: "attribute",
  attribute,
  condition
});
