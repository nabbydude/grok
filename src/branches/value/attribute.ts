import { Pattern, r } from "@/r";

import { AttributeValue } from "@/types/value";

import { parseScope } from "@/branches/scope/_";

export const parseAttributeValue: Pattern<AttributeValue> = (
  r`${parseScope}('s?|your|its) ${r.anyOf(
    r`converted mana cost`.as(_ => <"convertedManaCost">"convertedManaCost"),
    r`power`.as(_ => <"power">"power"),
    r`toughness`.as(_ => <"toughness">"toughness")
  )}`.as(([scope, attribute]) => <AttributeValue>{
    type: "attribute",
    attribute,
    scope
  })
);
