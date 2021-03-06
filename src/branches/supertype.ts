import { Pattern, r } from "@/r";

import { Supertype } from "@/types/general";

import { SUPERTYPES } from "@/data";

export const parseSupertype: Pattern<Supertype> = (
  r.anyOf(...SUPERTYPES.map(supertype => r.reg(
    new RegExp(`${supertype.singular}|${supertype.plural}`, "i")
  ).as(_ => <Supertype>supertype.singular)))
);
