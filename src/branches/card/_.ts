import { Pattern, r } from "@/r";

import { Card } from "@/types/general";

import { parseAbility } from "@/branches/ability/_";

export const parseCard: Pattern<Card> = r.defer(() => r.many(
  parseAbility,
  r`\n`
).as(abilities => <Card>{
  abilities
}));
