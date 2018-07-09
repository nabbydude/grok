import { Pattern, r } from "@/r";

import { PopulateAction } from "@/types/action";

export const parsePopulateAction: Pattern<PopulateAction> = r`populates?`.as(
  _ => <PopulateAction>{ type: "populate" }
);
