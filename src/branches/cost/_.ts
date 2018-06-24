import { r } from "@/r";

import { AndCost, Cost, OrCost } from "@/types/cost";

import { parseActionCost } from "./action";
import { parseManaCost } from "./mana";
import { parseTapCost } from "./tap";

export const parseCost = r.many(
  r.many(
    r.anyOf<Cost>(
      parseActionCost,
      parseManaCost,
      parseTapCost
    ),
    r`, `
  ).as(costs => costs.length > 1 ? <AndCost>{ type: "and", costs } : costs[0]),
  r`,? or `
).as(costs => costs.length > 1 ? <OrCost>{ type: "or", costs } : costs[0]);
