import { r } from "@/r";

import { PopulateAction } from "@/types/action";

export const parsePopulateAction = r`populates?`.as(
  _ => <PopulateAction>{ type: "populate" }
);
