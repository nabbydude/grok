import { Pattern, r } from "@/r";

import { FatesealAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseFatesealAction: Pattern<FatesealAction> = (
  r.defer(() => r`fateseal ${parseValue}`.as(
    ([value]) => <FatesealAction>{ type: "fateseal", value }
  ))
);
