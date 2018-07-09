import { Pattern, r } from "@/r";

import { ActivationInstructions } from "@/types/activation-instructions";

export const parseActivationInstructions: Pattern<ActivationInstructions> = (
  r`^\\b$`.as(_ => <ActivationInstructions>{ type: "none" })
);
