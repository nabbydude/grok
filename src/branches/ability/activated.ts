import { Pattern, r } from "@/r";

import { ActivatedAbility } from "@/types/ability";
import { NoneActivationInstructions } from "@/types/activation-instructions";

import { parseActivationInstructions } from "@/branches/activation-instructions/_";
import { parseCost } from "@/branches/cost/_";
import { parseEffect } from "@/branches/effect/_";

export const parseActivatedAbility: Pattern<ActivatedAbility> = (
  r.defer(() => r`${parseCost}: ${parseEffect}.${r.anyOf(
    r` ${parseActivationInstructions}`.as(
      // TODO: fix hack
      ([activationInstructions]) => activationInstructions.data
    ),
    r``.as(_ => <NoneActivationInstructions>{ type: "none" })
  )}`.as(([cost, effect, instructions]) => <ActivatedAbility> {
    type: "activated",
    cost,
    effect,
    instructions
  }))
);
