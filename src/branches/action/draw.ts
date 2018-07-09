import { Pattern, r } from "@/r";

import { DrawAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseDrawAction: Pattern<DrawAction> = r.anyOf(
  r`draws? ${parseValue} cards?`,
  r`draws? cards equal to ${parseValue}`
).as(([amount]) => <DrawAction>{ type: "draw", amount });
