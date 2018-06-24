import { r } from "@/r";

import { LivingWeaponKeywordAbility } from "@/types/ability";

export const parseLivingWeaponKeywordAbility = r`living weapon`.as(
  _ => <LivingWeaponKeywordAbility>{ type: "keyword", keyword: "livingWeapon" }
);
