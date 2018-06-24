import { r } from "@/r";

import { IsTappedObjectQualifier, NotObjectQualifier } from "@/types/object-qualifier";

export const parseTappedObjectQualifier = (
  r.anyOf<IsTappedObjectQualifier | NotObjectQualifier>(
    r`tapped`.as(_ => <IsTappedObjectQualifier>{ type: "isTapped" }),
    r`untapped`.as(_ => <NotObjectQualifier>{
      type: "not",
      qualifier: <IsTappedObjectQualifier>{ type: "isTapped" }
    })
  )
);
