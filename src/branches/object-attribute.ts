import { r } from "@/r";

import { ObjectAttribute } from "@/types/general";

export const parseObjectAttribute = r.anyOf<ObjectAttribute>(
  r`powers?`.as(_ => <"power">"power"),
  r`toughness(es)?`.as(_ => <"toughness">"toughness"),
  r`converted mana costs?`.as(_ => <"convertedManaCost">"convertedManaCost"),
  r`colors?`.as(_ => <"colors">"colors")
);
