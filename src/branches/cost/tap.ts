import { Pattern, r } from "@/r";

import { TapCost, UntapCost } from "@/types/cost";

export const parseTapCost: Pattern<TapCost | UntapCost> = (
  r.anyOf<TapCost | UntapCost>(
    r`{T}`.as(_ => <TapCost>{ type: "tap" }),
    r`{Q}`.as(_ => <UntapCost>{ type: "untap" })
  )
);
