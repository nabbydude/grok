import { r } from "@/r";

import { Mana } from "@/types/general";

export const parseMana = r.many(
  r.reg(/{(([WUBRGCSXYZ]|\d+)(\/[WUBRGCSXYZP])*)}/).as(
    ([_, type]) => type
  ),
  r``
).as(types => {
  const mana: Mana = {};
  for (const t of types) {
    const n = Number(t);
    const { type, amount } = isNaN(n) ?
      { type: t, amount: 1 } :
      { type: 1, amount: n };
    mana[type] = mana[type] ? mana[type] + amount : amount;
  }

  return mana;
});
