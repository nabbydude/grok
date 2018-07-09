import { Pattern, r } from "@/r";

import { TotemArmorKeywordAbility } from "@/types/ability";

export const parseTotemArmorKeywordAbility: (
  Pattern<TotemArmorKeywordAbility>
) = (
  r`totem armor`.as(
    _ => <TotemArmorKeywordAbility>{ type: "keyword", keyword: "totemArmor" }
  )
);
