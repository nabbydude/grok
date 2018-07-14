import { Pattern, r } from "@/r";

import { OneShotEffect } from "@/types/effect";

import { parseAction } from "@/branches/action/_";

export const parseOneShotEffect: Pattern<OneShotEffect> = (
  r.defer(() => parseAction.as(
    action => <OneShotEffect>{ type: "oneShot", action }
  ))
);
