import { Pattern, r } from "@/r";

import { IsAbilityObjectQualifier, IsCardObjectQualifier, IsPermanentCardObjectQualifier, IsPermanentObjectQualifier, IsSpellObjectQualifier } from "@/types/object-qualifier";

export const parseObjectTypeObjectQualifier: Pattern<
  IsSpellObjectQualifier |
  IsPermanentCardObjectQualifier |
  IsPermanentObjectQualifier |
  IsAbilityObjectQualifier |
  IsCardObjectQualifier
> = r.anyOf<
  IsSpellObjectQualifier |
  IsPermanentCardObjectQualifier |
  IsPermanentObjectQualifier |
  IsAbilityObjectQualifier |
  IsCardObjectQualifier
>(
  r`spells?`.as(_ => <IsSpellObjectQualifier>{ type: "isSpell" }),
  // tslint:disable-next-line:max-line-length
  r`permanent cards?`.as(_ => <IsPermanentCardObjectQualifier>{ type: "isPermanentCard" }),
  r`permanents?`.as(_ => <IsPermanentObjectQualifier>{ type: "isPermanent" }),
  r`abilit(y|ies)`.as(_ => <IsAbilityObjectQualifier>{ type: "isAbility" }),
  r`cards?`.as(_ => <IsCardObjectQualifier>{ type: "isCard" })
);
