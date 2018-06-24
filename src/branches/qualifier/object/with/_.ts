import { r } from "@/r";

import { ObjectQualifier } from "@/types/object-qualifier";

import { parseAttributeWithObjectQualifier } from "./attribute";
import { parseCounterWithObjectQualifier   } from "./counter";
import { parseKeywordWithObjectQualifier   } from "./keyword";

export const parseWithObjectQualifier = r`with ${r.many(
  r.anyOf<ObjectQualifier>(
    parseAttributeWithObjectQualifier,
    parseCounterWithObjectQualifier,
    parseKeywordWithObjectQualifier,
  ),
  r`, `,
  r`,? and `
)}`.as(([qualifiers]) => qualifiers);
