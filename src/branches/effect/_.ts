import { r } from "@/r";

import { Effect } from "@/types/effect";

import { parseOneShotEffect } from "./one-shot";

export const parseEffect = r.anyOf<Effect>(
  parseOneShotEffect
);
