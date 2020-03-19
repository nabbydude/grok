import { Pattern, r } from "@/r";

import { HasSupertypeObjectQualifier } from "@/types/object-qualifier";

import { parseSupertype } from "@/branches/supertype";

export const parseSupertypeObjectQualifier: (
  Pattern<HasSupertypeObjectQualifier>
// tslint:disable-next-line:max-line-length
) = r.defer(() => parseSupertype.as((_, supertype) => <HasSupertypeObjectQualifier>{
  type: "hasSupertype",
  supertype
}));
