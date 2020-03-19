import { Pattern, r } from "@/r";

import { IsTappedObjectQualifier, IsUntappedObjectQualifier } from "@/types/object-qualifier";

export const parseTappedObjectQualifier: (
  Pattern<IsTappedObjectQualifier | IsUntappedObjectQualifier>
) = r.anyOf<IsTappedObjectQualifier | IsUntappedObjectQualifier>(
  r`tapped`.as(_ => <IsTappedObjectQualifier>{ type: "isTapped" }),
  r`untapped`.as(_ => <IsUntappedObjectQualifier>{ type: "isUntapped" })
);
