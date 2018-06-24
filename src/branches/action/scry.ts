import { r } from "@/r";

import { ScryAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseScryAction = r`scry ${parseValue}`.as(
  ([value]) => <ScryAction>{ type: "scry", value }
);
