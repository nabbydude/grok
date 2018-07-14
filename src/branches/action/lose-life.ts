import { Pattern, r } from "@/r";

import { LoseLifeAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseLoseLifeAction: Pattern<LoseLifeAction> = (
  r.defer(() => r.anyOf(
    r`loses? ${parseValue} life`,
    r`loses? life equal to ${parseValue}`
  ).as(([amount]) => <LoseLifeAction>{ type: "loseLife", amount }))
);
