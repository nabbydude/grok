import { Pattern, r } from "@/r";

import { Subtype } from "@/types/general";

import { SUBTYPES } from "@/data";

export const parseSubtype: Pattern<Subtype> = (
  r.anyOf(...SUBTYPES.map(subtype => r.reg(
    new RegExp(`${subtype.singular}|${subtype.plural}`, "i")
  ).as(_ => <Subtype>subtype.singular)))
);
