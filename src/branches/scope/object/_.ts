import { Pattern, r } from "@/r";

import { ObjectQualifier } from "@/types/object-qualifier";
import { AllObjectScope } from "@/types/scope";

import { parseCardTypeObjectQualifier } from "@/branches/qualifier/object/card-type";
import { parseColorObjectQualifier } from "@/branches/qualifier/object/color";
import { parseColoredObjectQualifier } from "@/branches/qualifier/object/colored";
import { parseNonObjectQualifier } from "@/branches/qualifier/object/non";
import { parseSubtypeObjectQualifier } from "@/branches/qualifier/object/subtype";
import { parseSupertypeObjectQualifier } from "@/branches/qualifier/object/supertype";
import { parseTappedObjectQualifier } from "@/branches/qualifier/object/tapped";
import { parseTokenObjectQualifier } from "@/branches/qualifier/object/token";
import { parseWithObjectQualifier } from "@/branches/qualifier/object/with/_";

export const parseObjectScope: Pattern<AllObjectScope> = (
  r.defer(() => r.list<ObjectQualifier[]>(
    [
      parseTappedObjectQualifier.as(qualifier => [qualifier]),
      parseTokenObjectQualifier.as(qualifier => [qualifier]),
      r.anyOf<ObjectQualifier[]>(
        parseColoredObjectQualifier.as(qualifier => [qualifier]),
        r.many(parseColorObjectQualifier, r` `)
      ),
      r.many(parseNonObjectQualifier, r`, `),
      r.many(parseSupertypeObjectQualifier, r` `),
      r.many(parseSubtypeObjectQualifier, r` `),
      r.many(parseCardTypeObjectQualifier, r` `),
      parseWithObjectQualifier
    ],
    r` `
  ).as(qualifiers => {
    const flattenedQualifiers = qualifiers.reduce((a, v) => [...a, ...v]);

    return <AllObjectScope>{
      type: "object",
      qualifier: flattenedQualifiers.length > 1 ? (
        { type: "and", qualifiers: flattenedQualifiers }
      ) : (
        flattenedQualifiers[0]
      )
    };
  }))
);
