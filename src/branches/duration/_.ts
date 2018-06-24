import { r } from "@/r";

import { Duration } from "@/types/duration";

import { parseEndOfTurnDuration } from "./until-eot";

export const parseDuration = r.anyOf<Duration>(
  parseEndOfTurnDuration
);
