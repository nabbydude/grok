import { Pattern, r } from "@/r";

import { Mana, Pip } from "@/types/general";

export const parsePip: Pattern<Pip> = (
  r`{${r.reg(/(([WUBRGCSXYZ]|\d+)(\/[WUBRGCSXYZP])*)/).as(
    ([_, symbol]) => symbol
  )}}`.as(([symbol]) => <Pip>{ symbol })
);

export const parseMana: Pattern<Mana> = r.many(
  parsePip,
  r``
).as(pips => <Mana>{ pips });
