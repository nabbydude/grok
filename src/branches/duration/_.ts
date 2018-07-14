import { Pattern, r } from "@/r";

import { Duration } from "@/types/duration";

import { parseEndOfTurnDuration } from "@/branches/duration/until-eot";

export const parseDuration: Pattern<Duration> = r.defer(() => r.anyOf<Duration>(
  parseEndOfTurnDuration
));
