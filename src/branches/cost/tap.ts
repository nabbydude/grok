import { r } from "@/r";

import { TapCost, UntapCost } from "@/types/cost";

export const parseTapCost = r.anyOf<TapCost | UntapCost>(
  r`{T}`.as(_ => <TapCost>{ type: "tap" }),
  r`{Q}`.as(_ => <UntapCost>{ type: "untap" })
);
