import { Pattern, r } from "@/r";

import { AndCost, Cost, OrCost } from "@/types/cost";

import { parseActionCost } from "@/branches/cost/action";
import { parseManaCost } from "@/branches/cost/mana";
import { parseTapCost } from "@/branches/cost/tap";

export const parseCost: Pattern<Cost> = r.defer(() => r.many(
  r.many(
    r.anyOf<Cost>(
      parseActionCost,
      parseManaCost,
      parseTapCost
    ),
    r`, `
  // tslint:disable-next-line:max-line-length
  ).as(costs => costs.length > 1 ? <AndCost>{ type: "and", costs } : costs[0].data),
  r`,? or `
// tslint:disable-next-line:max-line-length
).as(costs => costs.length > 1 ? <OrCost>{ type: "or", costs } : costs[0].data));
