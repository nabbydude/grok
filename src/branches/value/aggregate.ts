import { r } from "@/r";

import { AggregateValue } from "@/types/value";

import { parseScope } from "@/branches/scope/_";

export const parseAggregateValue = r`the ${r.anyOf(
  r`total`.as(_ => <"total">"total"),
  r`highest|most`.as(_ => <"highest">"highest"),
  r`lowest|least`.as(_ => <"lowest">"lowest")
)} ${r.anyOf(
  r`converted mana cost`.as(_ => <"convertedManaCost">"convertedManaCost"),
  r`power`.as(_ => <"power">"power"),
  r`toughness`.as(_ => <"toughness">"toughness")
)} among ${parseScope}`.as(([aggregate, attribute, scope]) => <AggregateValue>{
  type: "aggregate",
  aggregate,
  attribute,
  scope
});
