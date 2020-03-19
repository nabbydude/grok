import { Pattern, r } from "@/r";

import { BandingKeywordAbility } from "@/types/ability";
import { EverythingScope } from "@/types/scope";

import { parseScope } from "@/branches/scope/_";

export const parseBandingKeywordAbility: Pattern<BandingKeywordAbility> = (
  r.defer(() => r.anyOf(
    r`bands with other ${parseScope}`.as(([scope]) => scope),

    // TODO: fix hack
    // tslint:disable-next-line:max-line-length
    r`${r`banding`.as(_ => <EverythingScope>{ type: "everything" })}`.as(([scope]) => scope)
  ).as(scope => <BandingKeywordAbility>{
    type: "keyword",
    keyword: "banding",
    scope
  }))
);
