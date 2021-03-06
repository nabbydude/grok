import { Pattern, r } from "@/r";

import { GainLifeAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseGainLifeAction: Pattern<GainLifeAction> = (
  r.defer(() => r.anyOf(
    r`gains? ${parseValue} life`,
    r`gains? life equal to ${parseValue}`
  ).as(([amount]) => <GainLifeAction>{ type: "gainLife", amount }))
);
