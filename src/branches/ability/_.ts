import { Pattern, r } from "@/r";

import { Ability } from "@/types/ability";

import { parseActivatedAbility } from "@/branches/ability/activated";
import { parseSpellAbility     } from "@/branches/ability/spell";

import { parseKeywordAbility   } from "@/branches/ability/keyword/_";

export const parseAbility: Pattern<Ability[]> = r.anyOf<Ability[]>(
  r.many(parseKeywordAbility, r`[,;] `),
  parseActivatedAbility.as(ability => [ability]),
  parseSpellAbility.as(ability => [ability])
);
