import { Pattern, r } from "@/r";

import { HasSubtypeObjectQualifier } from "@/types/object-qualifier";

import { parseSubtype } from "@/branches/subtype";

export const parseSubtypeObjectQualifier: Pattern<HasSubtypeObjectQualifier> = (
  r.defer(() => parseSubtype.as(
    (_, subtype) => <HasSubtypeObjectQualifier>{ type: "hasSubtype", subtype }
  ))
);
