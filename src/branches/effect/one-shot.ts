import { r } from "@/r";

import { OneShotEffect } from "@/types/effect";

import { parseAction } from "@/branches/action/_";

export const parseOneShotEffect = parseAction.as(
  action => <OneShotEffect>{ type: "oneShot", action }
);
