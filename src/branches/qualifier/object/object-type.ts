import { r } from "@/r";

import { HasCardTypeObjectQualifier, IsAbilityObjectQualifier, IsCardObjectQualifier, IsSpellObjectQualifier, ObjectQualifier, OrObjectQualifier } from "@/types/object-qualifier";

export const parseColorsObjectQualifier = r.anyOf(
  r`spells?`.as(_ => <IsSpellObjectQualifier>{ type: "isSpell" }),
  r`permanent cards?`.as(_ => <OrObjectQualifier>{
    type: "or",
    qualifiers: [
      <HasCardTypeObjectQualifier>{
        type: "hasCardtype",
        cardType: "creature"
      },
      <HasCardTypeObjectQualifier>{
        type: "hasCardtype",
        cardType: "artifact"
      },
      <HasCardTypeObjectQualifier>{
        type: "hasCardtype",
        cardType: "enchantment"
      },
      <HasCardTypeObjectQualifier>{
        type: "hasCardtype",
        cardType: "land"
      },
      <HasCardTypeObjectQualifier>{
        type: "hasCardtype",
        cardType: "planeswalker"
      }
    ]
  }),
  r`permanents?`.as(_ => <{}>{ type: "inZone", zone: { type: "battlefield" } }),
  r`abilit(y|ies)`.as(_ => <IsAbilityObjectQualifier>{ type: "isAbility" }),
  r`cards?`.as(_ => <IsCardObjectQualifier>{ type: "isCard" })
);
