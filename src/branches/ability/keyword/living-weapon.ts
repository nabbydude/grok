import { Pattern, r } from "@/r";

import { LivingWeaponKeywordAbility } from "@/types/ability";

export const parseLivingWeaponKeywordAbility: (
  Pattern<LivingWeaponKeywordAbility>
) = (
  r`living weapon`.as(_ => <LivingWeaponKeywordAbility>{
    type: "keyword",
    keyword: "livingWeapon"
  })
);
