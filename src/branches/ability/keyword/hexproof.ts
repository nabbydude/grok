import { Pattern, r } from "@/r";

import { HexproofKeywordAbility } from "@/types/ability";
import { EverythingScope } from "@/types/scope";

import { parseScope } from "@/branches/scope/_";

export const parseHexproofKeywordAbility: Pattern<HexproofKeywordAbility> = (
  r.defer(() => r`hexproof${r.anyOf(
    // TODO: fix hack
    r` from ${parseScope}`.as(([scope]) => scope.data),
    r``.as(_ => <EverythingScope>{ type: "everything" })
  )}`.as(([scope]) => <HexproofKeywordAbility>{
    type: "keyword",
    keyword: "hexproof",
    scope
  }))
);
