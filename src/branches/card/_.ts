import { Pattern, r } from "@/r";

import { Card } from "@/types/general";

import { parseAbility } from "@/branches/ability/_";

export const parseCard: Pattern<Card> = r.many(
  parseAbility,
  r`\n`
).as(abilities => <Card>{
  abilities: abilities.reduce((a, v) => [...a, ...v])
});
