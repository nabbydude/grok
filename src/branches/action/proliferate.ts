import { Pattern, r } from "@/r";

import { ProliferateAction } from "@/types/action";

export const parseProliferateAction: Pattern<ProliferateAction> = (
  r`proliferates?`.as(_ => <ProliferateAction>{ type: "proliferate" })
);
