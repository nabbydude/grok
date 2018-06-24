import { r } from "@/r";

import { ChoiceDividedSpread, DividedSpread, EachSpread, EvenlyDividedSpread, Spread } from "@/types/spread";

import { parseScope } from "@/branches/scope/_";

export const parseSpread = r.anyOf<Spread>(
  r`to`.as(_ => <EachSpread>{ type: "each" }),
  r`divided ${r.anyOf<DividedSpread>(
    r`evenly, rounded ${r.anyOf<"up" | "down">(
      r`up`.as(_ => <"up">"up"),
      r`down`.as(_ => <"down">"down")
    )}`.as(([evenlyDirection]) => <EvenlyDividedSpread>{
      type: "divided",
      dividedType: "evenly",
      evenlyDirection
    }),
    r`as ${parseScope} chooses?`.as(([by]) => <ChoiceDividedSpread>{
      type: "divided",
      dividedType: "choice",
      by
    })
  )} among`.as(([dividedInfo]) => <DividedSpread>dividedInfo)
);
