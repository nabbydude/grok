import { r } from "@/r";

import { CardType } from "@/types/general";

import { CARD_TYPES } from "@/data";

export const parseCardType = r.anyOf(...CARD_TYPES.map(cardtype => r.reg(
  new RegExp(`${cardtype.singular}|${cardtype.plural}`, "i")
).as(_ => <CardType>cardtype.singular)));
