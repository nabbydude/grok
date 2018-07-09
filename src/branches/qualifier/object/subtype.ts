import { Pattern, r } from "@/r";

import { HasSubtypeObjectQualifier } from "@/types/object-qualifier";

import { parseSubtype } from "@/branches/subtype";

export const parseSubtypeObjectQualifier: Pattern<HasSubtypeObjectQualifier> = (
  parseSubtype.as(
    subtype => <HasSubtypeObjectQualifier>{ type: "hasSubtype", subtype }
  )
);
