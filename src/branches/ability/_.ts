import { Pattern, r } from "@/r";
import { Node } from "@/reader/result";

import { Ability } from "@/types/ability";

import { parseActivatedAbility } from "@/branches/ability/activated";
import { parseKeywordAbility   } from "@/branches/ability/keyword/_";
import { parseSpellAbility     } from "@/branches/ability/spell";

export const parseAbility: Pattern<Node<Ability>[]> = (
  r.defer(() => r.anyOf<Node<Ability>[]>(
    r.many(parseKeywordAbility, r`[,;] `),
    parseActivatedAbility.as((_, node) => [node]),
    parseSpellAbility.as((_, node) => [node])
  ))
);
