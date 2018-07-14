import { Pattern, r } from "@/r";

import { SupportAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseSupportAction: Pattern<SupportAction> = (
  r.defer(() => r`support ${parseValue}`.as(
    ([value]) => <SupportAction>{ type: "support", value }
  ))
);
