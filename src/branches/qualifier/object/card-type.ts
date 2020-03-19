import { Pattern, r } from "@/r";

import { HasCardTypeObjectQualifier } from "@/types/object-qualifier";

import { parseCardType } from "@/branches/card-type";

export const parseCardTypeObjectQualifier: (
  Pattern<HasCardTypeObjectQualifier>
) = r.defer(() => parseCardType.as(
  (_, cardType) => <HasCardTypeObjectQualifier>{ type: "hasCardtype", cardType }
));
