import { r } from "@/r";

import { MonstrosityAction } from "@/types/action";

import { parseValue } from "@/branches/value/_";

export const parseMonstrosityAction = r`monstrosity ${parseValue}`.as(
  ([value]) => <MonstrosityAction>{ type: "monstrosity", value }
);
