import { r } from "@/r";

import { Ability } from "@/types/ability";

import { parseActivatedAbility } from "./activated";
import { parseSpellAbility     } from "./spell";

import { parseKeywordAbility   } from "./keyword/_";

export const parseAbility = r.anyOf<Ability[]>(
  r.many(parseKeywordAbility, r`[,;] `),
  parseActivatedAbility.as(ability => [ability]),
  parseSpellAbility.as(ability => [ability])
);
