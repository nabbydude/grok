import { Pattern, r } from "@/r";

import { EndOfTurnDuration } from "@/types/duration";

export const parseEndOfTurnDuration: Pattern<EndOfTurnDuration> = (
  r`until end of turn`.as(_ => <EndOfTurnDuration>{ type: "endOfTurn" })
);
