import { r } from "@/r";

import { EndOfTurnDuration } from "@/types/duration";

export const parseEndOfTurnDuration = r`until end of turn`.as(
  _ => <EndOfTurnDuration>{ type: "endOfTurn" }
);
