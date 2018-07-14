import { Pattern, r } from "@/r";

import { Ability } from "@/types/ability";

import { parseActivatedAbility } from "@/branches/ability/activated";
import { parseKeywordAbility   } from "@/branches/ability/keyword/_";
import { parseSpellAbility     } from "@/branches/ability/spell";

export const parseAbility: Pattern<Ability[]> = (
  r.defer(() => r.anyOf<Ability[]>(
    r.many(parseKeywordAbility, r`[,;] `),
    parseActivatedAbility.as(ability => [ability]),
    parseSpellAbility.as(ability => [ability])
  ))
);
