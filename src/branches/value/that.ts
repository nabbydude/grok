import { r } from "@/r";

import { ThatValue } from "@/types/value";

export const parseThatValue = r`that m(uch|any)`.as(
  _ => <ThatValue>{ type: "that" }
);
