import { Pattern, r } from "@/r";

import { SpellAbility } from "@/types/ability";

import { parseEffect } from "@/branches/effect/_";

export const parseSpellAbility: Pattern<SpellAbility> = (
  r.defer(() => r`${parseEffect}.`.as(
    ([effect]) => <SpellAbility>{ type: "spell", effect }
  ))
);
