import { Pattern, r } from "@/r";

import { BattlefieldZone } from "@/types/zone";

export const parseBattlefieldZone: Pattern<BattlefieldZone> = (
  r`the battlefield`.as(_ => <BattlefieldZone>{ type: "battlefield" })
);
