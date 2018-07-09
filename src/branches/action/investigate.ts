import { Pattern, r } from "@/r";

import { InvestigateAction } from "@/types/action";

export const parseInvestigateAction: Pattern<InvestigateAction> = (
  r`investigates?`.as(_ => <InvestigateAction>{ type: "investigate" })
);
