import { Pattern, r } from "@/r";

import { ActionCost } from "@/types/cost";

import { parseAction } from "@/branches/action/_";

export const parseActionCost: Pattern<ActionCost> = (
  r.defer(() => parseAction.as(
    (_, action) => <ActionCost>{ type: "action", action }
  ))
);
