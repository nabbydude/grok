import { Pattern, r } from "@/r";

import { IsTokenObjectQualifier } from "@/types/object-qualifier";

export const parseTokenObjectQualifier: Pattern<IsTokenObjectQualifier> = (
  r`token`.as(_ => <IsTokenObjectQualifier>{ type: "isToken" })
);
