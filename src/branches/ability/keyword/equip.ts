import { r } from "@/r";

import { EquipKeywordAbility } from "@/types/ability";
import { EverythingScope } from "@/types/scope";

import { parseCost } from "@/branches/cost/_";
import { parseScope } from "@/branches/scope/_";

export const parseEquipKeywordAbility = r`equip${r.anyOf(
  r` ${parseScope}`.as(([scope]) => scope),
  r``.as(_ => <EverythingScope>{ type: "everything" })
)}[— ]${parseCost}`.as(([scope, cost]) => <EquipKeywordAbility>{
  type: "keyword",
  keyword: "equip",
  scope,
  cost
});
