import { r } from "@/r";

import { InvestigateAction } from "@/types/action";

export const parseInvestigateAction = r`investigates?`.as(
  _ => <InvestigateAction>{ type: "investigate" }
);
