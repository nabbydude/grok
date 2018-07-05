import { r } from "@/r";

import { CounterName } from "@/types/general";

import { COUNTERS } from "@/data";

export const parseCounterName = r.anyOf(...COUNTERS.map(
  counter => r.reg(
    new RegExp(counter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "i")
  ).as(_ => <CounterName>counter)
));
