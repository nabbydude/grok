import { Pattern, r } from "@/r";

import { ThatValue } from "@/types/value";

export const parseThatValue: Pattern<ThatValue> = r`that m(uch|any)`.as(
  _ => <ThatValue>{ type: "that" }
);
