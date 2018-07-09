import { Pattern, r } from "@/r";

import { CardName } from "@/types/general";

import { CARD_NAMES } from "@/data";

export const parseCardName: Pattern<CardName> = r.anyOf(...CARD_NAMES.map(
  cardname => r.reg(
    new RegExp(cardname.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
  ).as(_ => <CardName>cardname)
));
