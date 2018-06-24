import { r } from "@/r";

import { CardName } from "@/types/general";

import { CARD_NAMES } from "@/data";

export const parseCardName = r.anyOf(...CARD_NAMES.map(
  cardname => r.reg(new RegExp(cardname)).as(_ => <CardName>cardname)
));
