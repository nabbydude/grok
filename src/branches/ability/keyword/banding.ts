import { Pattern, r } from "@/r";

import { BandingKeywordAbility } from "@/types/ability";
import { EverythingScope } from "@/types/scope";

import { parseScope } from "@/branches/scope/_";

export const parseBandingKeywordAbility: Pattern<BandingKeywordAbility> = (
  r.anyOf(
    r`bands with other ${parseScope}`.as(([scope]) => scope),
    r`banding`.as(_ => <EverythingScope>{ type: "everything" })
  ).as(scope => <BandingKeywordAbility>{
    type: "keyword",
    keyword: "banding",
    scope
  })
);
