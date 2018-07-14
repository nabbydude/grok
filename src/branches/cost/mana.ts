import { Pattern, r } from "@/r";

import { ManaCost } from "@/types/cost";

import { parseMana } from "@/branches/mana";

export const parseManaCost: Pattern<ManaCost> = r.defer(() => parseMana.as(
  mana => <ManaCost>{ type: "mana", mana }
));
