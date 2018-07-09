import { Pattern, r } from "@/r";

import { DamageAction } from "@/types/action";

import { parseScope } from "@/branches/scope/_";
import { parseSpread } from "@/branches/spread";
import { parseValue } from "@/branches/value/_";

export const parseDamageAction: Pattern<DamageAction> = (
  r`${parseScope} deals? ${r.anyOf(
    r`${parseValue} damage ${parseSpread} ${parseScope}`.as(
      ([amount, spread, scope]) => ({ amount, spread, scope })
    ),
    r`damage equal to ${parseValue} ${parseSpread} ${parseScope}`.as(
      ([amount, spread, scope]) => ({ amount, spread, scope })
    ),
    r`damage ${parseSpread} ${parseScope} equal to ${parseValue}`.as(
      ([spread, scope, amount]) => ({ amount, spread, scope })
    )
  )}`.as(([source, partial]) => <DamageAction>{ source, ...partial })
);
