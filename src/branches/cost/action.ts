import { r } from "@/r";

import { ActionCost } from "@/types/cost";

import { parseAction } from "@/branches/action/_";

export const parseActionCost = parseAction.as(
  action => <ActionCost>{ type: "action", action }
);
