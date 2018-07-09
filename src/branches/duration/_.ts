import { Pattern, r } from "@/r";

import { Duration } from "@/types/duration";

import { parseEndOfTurnDuration } from "./until-eot";

export const parseDuration: Pattern<Duration> = r.anyOf<Duration>(
  parseEndOfTurnDuration
);
