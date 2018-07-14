import { Pattern, r } from "@/r";

import { BloodthirstKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseBloodthirstKeywordAbility: (
  Pattern<BloodthirstKeywordAbility>
) = (
  r.defer(() => (
    r`bloodthirst ${parseValue}`.as(([value]) => <BloodthirstKeywordAbility>{
      type: "keyword",
      keyword: "bloodthirst",
      value
    })
  ))
);
