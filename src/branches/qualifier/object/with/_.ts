import { Pattern, r } from "@/r";

import { ObjectQualifier } from "@/types/object-qualifier";

import { parseAttributeWithObjectQualifier } from "@/branches/qualifier/object/with/attribute";
import { parseCounterWithObjectQualifier   } from "@/branches/qualifier/object/with/counter";
import { parseKeywordWithObjectQualifier   } from "@/branches/qualifier/object/with/keyword";

export const parseWithObjectQualifier: Pattern<ObjectQualifier[]> = (
  r.defer(() => r`with ${r.list<ObjectQualifier>(
    [
      parseAttributeWithObjectQualifier,
      parseCounterWithObjectQualifier,
      parseKeywordWithObjectQualifier
    ],
    r`, `,
    r`,? and `
  )}`.as(([qualifiers]) => qualifiers))
);
