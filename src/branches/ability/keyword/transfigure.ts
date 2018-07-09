import { Pattern, r } from "@/r";

import { TransfigureKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseTransfigureKeywordAbility: (
  Pattern<TransfigureKeywordAbility>
) = (
  r`transfigure[— ]${parseCost}`.as(([cost]) => <TransfigureKeywordAbility>{
    type: "keyword",
    keyword: "transfigure",
    cost
  })
);
