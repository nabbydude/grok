import { Pattern, r } from "@/r";

import { NotObjectQualifier, ObjectQualifier } from "@/types/object-qualifier";

import { parseCardTypeObjectQualifier } from "@/branches/qualifier/object/card-type";
import { parseColorObjectQualifier } from "@/branches/qualifier/object/color";
import { parseSubtypeObjectQualifier } from "@/branches/qualifier/object/subtype";
import { parseSupertypeObjectQualifier } from "@/branches/qualifier/object/supertype";
import { parseTokenObjectQualifier } from "@/branches/qualifier/object/token";

export const parseNonObjectQualifier: Pattern<NotObjectQualifier> = r.anyOf(
  r`non${r.anyOf<ObjectQualifier>(
    parseColorObjectQualifier,
    parseSupertypeObjectQualifier,
    parseCardTypeObjectQualifier,
    parseTokenObjectQualifier
  )}`,
  r`Non-${parseSubtypeObjectQualifier}`
).as(([qualifier]) => <NotObjectQualifier>{ type: "not", qualifier });
