import { r } from "@/r";

import { BolsterAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseBolsterAction = r`bolsters? ${parseValue}`.as(([value]) => <BolsterAction>{ type: "bolster", value });
