import { r } from "@/r";

import { SpellAbility } from "@/types/ability";

import { parseEffect } from "@/branches/effect/_";

export const parseSpellAbility = r`${parseEffect}.`.as(
  ([effect]) => <SpellAbility>{ type: "spell", effect }
);
