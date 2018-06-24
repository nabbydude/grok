import { r } from "@/r";

import { HexproofKeywordAbility } from "@/types/ability";
import { EverythingScope } from "@/types/scope";

import { parseScope } from "@/branches/scope/_";

export const parseHexproofKeywordAbility = r`hexproof${r.anyOf(
  r` from ${parseScope}`.as(([scope]) => scope),
  r``.as(_ => <EverythingScope>{ type: "everything" })
)}`.as(
  ([scope]) => <HexproofKeywordAbility>{
    type: "keyword",
    keyword: "hexproof",
    scope
  }
);
