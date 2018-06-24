import { r } from "@/r";

import { HasCardTypeObjectQualifier } from "@/types/object-qualifier";

import { parseCardType } from "@/branches/card-type";

export const parseCardTypeObjectQualifier = parseCardType.as(
  cardType => <HasCardTypeObjectQualifier>{ type: "hasCardtype", cardType }
);
