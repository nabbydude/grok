import { r } from "@/r";

import { SupportAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseSupportAction = r`support ${parseValue}`.as(
  ([value]) => <SupportAction>{ type: "support", value }
);
