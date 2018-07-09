import { Pattern, r } from "@/r";

import { EvolveKeywordAbility } from "@/types/ability";

export const parseEvolveKeywordAbility: Pattern<EvolveKeywordAbility> = (
  r`evolve`.as(
    _ => <EvolveKeywordAbility>{ type: "keyword", keyword: "evolve" }
  )
);
