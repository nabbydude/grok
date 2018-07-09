import { Pattern, r } from "@/r";

import { NamedObjectQualifier } from "@/types/object-qualifier";

import { parseCardName } from "@/branches/card-name";

export const parseNamedObjectQualifier: Pattern<NamedObjectQualifier> = (
  r`named ${parseCardName}`.as(
    ([cardName]) => <NamedObjectQualifier>{ type: "named", cardName }
  )
);
