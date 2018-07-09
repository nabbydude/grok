import { Pattern, r } from "@/r";

import { IsTappedObjectQualifier, NotObjectQualifier } from "@/types/object-qualifier";

export const parseTappedObjectQualifier: (
  Pattern<IsTappedObjectQualifier | NotObjectQualifier>
) = (
  r.anyOf<IsTappedObjectQualifier | NotObjectQualifier>(
    r`tapped`.as(_ => <IsTappedObjectQualifier>{ type: "isTapped" }),
    r`untapped`.as(_ => <NotObjectQualifier>{
      type: "not",
      qualifier: <IsTappedObjectQualifier>{ type: "isTapped" }
    })
  )
);
