import { r } from "@/r";

import { CountValue } from "@/types/value";

import { parseScope } from "@/branches/scope/_";

export const parseCountValue = r`the( total)? number of ${parseScope}`.as(
  ([scope]) => <CountValue>{ type: "count", scope }
);
