import { Pattern, r } from "@/r";

import { NotObjectQualifier, ObjectQualifier } from "@/types/object-qualifier";
import { parseCardTypeObjectQualifier } from "./card-type";
import { parseColorObjectQualifier } from "./color";
import { parseSubtypeObjectQualifier } from "./subtype";
import { parseSupertypeObjectQualifier } from "./supertype";
import { parseTokenObjectQualifier } from "./token";

export const parseNonObjectQualifier: Pattern<NotObjectQualifier> = r.anyOf(
  r`non${r.anyOf<ObjectQualifier>(
    parseColorObjectQualifier,
    parseSupertypeObjectQualifier,
    parseCardTypeObjectQualifier,
    parseTokenObjectQualifier
  )}`,
  r`Non-${parseSubtypeObjectQualifier}`
).as(([qualifier]) => <NotObjectQualifier>{ type: "not", qualifier });
