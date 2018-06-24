import { r } from "@/r";

import { TotemArmorKeywordAbility } from "@/types/ability";

export const parseTotemArmorKeywordAbility = r`totem armor`.as(
  _ => <TotemArmorKeywordAbility>{ type: "keyword", keyword: "totemArmor" }
);
