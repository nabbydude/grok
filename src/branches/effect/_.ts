import { Pattern, r } from "@/r";

import { Effect } from "@/types/effect";

import { parseOneShotEffect } from "./one-shot";

export const parseEffect: Pattern<Effect> = r.anyOf<Effect>(
  parseOneShotEffect
);
