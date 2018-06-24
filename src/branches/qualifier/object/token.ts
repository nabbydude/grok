import { r } from "@/r";

import { IsTokenObjectQualifier } from "@/types/object-qualifier";

export const parseTokenObjectQualifier = r`token`.as(
  _ => <IsTokenObjectQualifier>{ type: "isToken" }
);
