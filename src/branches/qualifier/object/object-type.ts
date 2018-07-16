import { Pattern, r } from "@/r";

import { HasCardTypeObjectQualifier, InZoneObjectQualifier, IsAbilityObjectQualifier, IsCardObjectQualifier, IsSpellObjectQualifier, OrObjectQualifier } from "@/types/object-qualifier";

export const parseObjectTypeObjectQualifier: Pattern<
  IsSpellObjectQualifier |
  OrObjectQualifier |
  InZoneObjectQualifier |
  IsAbilityObjectQualifier |
  IsCardObjectQualifier
> = r.anyOf<
  IsSpellObjectQualifier |
  OrObjectQualifier |
  InZoneObjectQualifier |
  IsAbilityObjectQualifier |
  IsCardObjectQualifier
>(
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
  r`permanents?`.as(_ => <InZoneObjectQualifier>{
    type: "inZone",
    zone: { type: "battlefield" }
  }),
  r`abilit(y|ies)`.as(_ => <IsAbilityObjectQualifier>{ type: "isAbility" }),
  r`cards?`.as(_ => <IsCardObjectQualifier>{ type: "isCard" })
);
