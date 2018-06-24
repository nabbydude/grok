import { r } from "@/r";

import { TransfigureKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseTransfigureKeywordAbility = r`transfigure[— ]${parseCost}`.as(
  ([cost]) => <TransfigureKeywordAbility>{
    type: "keyword",
    keyword: "transfigure",
    cost
  }
);
