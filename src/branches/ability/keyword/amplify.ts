import { Pattern, r } from "@/r";

import { AmplifyKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseAmplifyKeywordAbility: Pattern<AmplifyKeywordAbility> = (
  r.defer(() => (
    r`amplify ${parseValue}`.as(([value]) => <AmplifyKeywordAbility>{
      type: "keyword",
      keyword: "amplify",
      value
    })
  ))
);
