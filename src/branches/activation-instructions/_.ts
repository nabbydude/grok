import { r } from "@/r";

import { ActivationInstructions } from "@/types/activation-instructions";

export const parseActivationInstructions = r`^\\b$`.as(
  _ => <ActivationInstructions>{ type: "none" }
);
