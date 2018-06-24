import { r } from "@/r";

import { FatesealAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseFatesealAction = r`fateseal ${parseValue}`.as(
  ([value]) => <FatesealAction>{ type: "fateseal", value }
);
