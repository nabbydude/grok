import { r } from "@/r";

import { ProliferateAction } from "@/types/action";

export const parseProliferateAction = r`proliferates?`.as(
  _ => <ProliferateAction>{ type: "proliferate" }
);
