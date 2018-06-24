import { r } from "@/r";

import { EvolveKeywordAbility } from "@/types/ability";

export const parseEvolveKeywordAbility = r`evolve`.as(
  _ => <EvolveKeywordAbility>{ type: "keyword", keyword: "evolve" }
);
