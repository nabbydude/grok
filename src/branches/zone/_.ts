import { Pattern, r } from "@/r";

import { Zone } from "@/types/zone";

import { parseBattlefieldZone } from "@/branches/zone/battlefield";

export const parseZone: Pattern<Zone> = r.defer(() => r.anyOf(
  parseBattlefieldZone
));
