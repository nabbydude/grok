import { r } from "@/r";

import { DrawAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseDrawAction = r.anyOf(
  r`draws? ${parseValue} cards?`,
  r`draws? cards equal to ${parseValue}`
).as(([amount]) => <DrawAction>{ type: "draw", amount });
