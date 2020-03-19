import { Pattern, r } from "@/r";
import { Node } from "@/reader/result";

import { ObjectQualifier } from "@/types/object-qualifier";
import { QualifiedObjectScope } from "@/types/scope";

import { parseCardTypeObjectQualifier } from "@/branches/qualifier/object/card-type";
import { parseColorObjectQualifier } from "@/branches/qualifier/object/color";
import { parseColoredObjectQualifier } from "@/branches/qualifier/object/colored";
import { parseNonObjectQualifier } from "@/branches/qualifier/object/non";
import { parseSubtypeObjectQualifier } from "@/branches/qualifier/object/subtype";
import { parseSupertypeObjectQualifier } from "@/branches/qualifier/object/supertype";
import { parseTappedObjectQualifier } from "@/branches/qualifier/object/tapped";
import { parseTokenObjectQualifier } from "@/branches/qualifier/object/token";
import { parseWithObjectQualifier } from "@/branches/qualifier/object/with/_";

export const parseObjectScope: Pattern<QualifiedObjectScope> = (
  r.defer(() => r.list<Node<ObjectQualifier>[]>(
    [
      parseTappedObjectQualifier.as((_, qualifier) => [qualifier]),
      parseTokenObjectQualifier.as((_, qualifier) => [qualifier]),
      r.anyOf<Node<ObjectQualifier>[]>(
        parseColoredObjectQualifier.as((_, qualifier) => [qualifier]),
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

    return <QualifiedObjectScope>{
      type: "object",
      qualifiers
    };
  }))
);
