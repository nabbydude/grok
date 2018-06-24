import { r } from "@/r";

import { ObjectQualifier } from "@/types/object-qualifier";

import { parseCardTypeObjectQualifier } from "@/branches/qualifier/object/card-type";
import { parseColorObjectQualifier } from "@/branches/qualifier/object/color";
import { parseColoredObjectQualifier } from "@/branches/qualifier/object/colored";
import { parseNonObjectQualifier } from "@/branches/qualifier/object/non";
import { parseSubtypeObjectQualifier } from "@/branches/qualifier/object/subtype";
import { parseSupertypeObjectQualifier } from "@/branches/qualifier/object/supertype";
import { parseTappedObjectQualifier } from "@/branches/qualifier/object/tapped";
import { parseTokenObjectQualifier } from "@/branches/qualifier/object/token";

export const parseObjectScope = (
  r`${r.anyOf<ObjectQualifier[]>(
    r`${parseTappedObjectQualifier} `,
    r``.as(_ => [])
  )}${r.anyOf<ObjectQualifier[]>(
    r`${parseTokenObjectQualifier} `,
    r``.as(_ => [])
  )}${r.anyOf<ObjectQualifier[]>(
    r`${parseColoredObjectQualifier} `,
    r`${r.many(parseColorObjectQualifier, r` `)} `.as(
      ([qualifiers]) => qualifiers
    ),
    r``.as(_ => [])
  )}${r.anyOf(
    r`${r.many(parseNonObjectQualifier, r`, `)} `.as(
      ([qualifiers]) => qualifiers
    ),
    r``.as(_ => [])
  )}${r.anyOf(
    r`${r.many(parseSupertypeObjectQualifier, r` `)} `.as(
      ([qualifiers]) => qualifiers),
    r``.as(_ => [])
  )}${r.anyOf<ObjectQualifier[]>(
    r.anyOf(
      r`${r.many(parseSubtypeObjectQualifier, r` `)} `.as(
        ([qualifiers]) => qualifiers
      ),
      r``.as(_ => [])
    ),
    r.anyOf(
      r`${r.many(parseCardTypeObjectQualifier, r` `)} `.as(
        ([qualifiers]) => qualifiers
      ),
      r``.as(_ => [])
    )
  )}`
);
