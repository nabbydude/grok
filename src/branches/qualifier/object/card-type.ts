import { Pattern, r } from "@/r";

import { HasCardTypeObjectQualifier } from "@/types/object-qualifier";

import { parseCardType } from "@/branches/card-type";

export const parseCardTypeObjectQualifier: (
  Pattern<HasCardTypeObjectQualifier>
) = (
  parseCardType.as(
    cardType => <HasCardTypeObjectQualifier>{ type: "hasCardtype", cardType }
  )
);
