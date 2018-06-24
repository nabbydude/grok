import { r } from "@/r";

import { HasSupertypeObjectQualifier } from "@/types/object-qualifier";

import { parseSupertype } from "@/branches/supertype";

export const parseSupertypeObjectQualifier = parseSupertype.as(
  supertype => <HasSupertypeObjectQualifier>{ type: "hasSupertype", supertype }
);
