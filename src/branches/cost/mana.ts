import { r } from "@/r";

import { ManaCost } from "@/types/cost";

import { parseMana } from "@/branches/mana";

export const parseManaCost = parseMana.as(
  mana => <ManaCost>{ type: "mana", mana }
);
