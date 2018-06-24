import { r } from "@/r";

import { HasSubtypeObjectQualifier } from "@/types/object-qualifier";

import { parseSubtype } from "@/branches/subtype";

export const parseSubtypeObjectQualifier = parseSubtype.as(
  subtype => <HasSubtypeObjectQualifier>{ type: "hasSubtype", subtype }
);
