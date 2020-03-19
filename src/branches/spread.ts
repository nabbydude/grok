import { Pattern, r } from "@/r";

import { RoundingDirection } from "@/types/general";
import { ChoiceDivision, DividedSpread, Division, EachSpread, EvenDivision, Spread } from "@/types/spread";

import { parseScope } from "@/branches/scope/_";

export const parseSpread: Pattern<Spread> = r.defer(() => r.anyOf<Spread>(
  r`to`.as(_ => <EachSpread>{ type: "each" }),
  r`divided ${r.anyOf<Division>(
    r`evenly, rounded ${r.anyOf<RoundingDirection>(
      r`up`.as(_ => "up"),
      r`down`.as(_ => "down")
    )}`.as(([roundingDirection]) => <EvenDivision>{
      type: "even",
      roundingDirection
    }),
    r`as ${parseScope} chooses?`.as(([by]) => <ChoiceDivision>{
      type: "choice",
      by
    })
  )} among`.as(([division]) => <DividedSpread>{
    type: "divided",
    division
  })
));
