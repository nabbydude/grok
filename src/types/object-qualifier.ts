import { Condition } from "@/types/condition";
import { CardName, CardType, Color, CounterName, Keyword, ObjectAttribute, Subtype, Supertype } from "@/types/general";
import { Scope } from "@/types/scope";

interface ObjectQualifierBase {
  type: string;
}

//#region Defs

//#region Basic

export interface HasKeywordObjectQualifier extends ObjectQualifierBase {
  type: "hasKeyword";
  keyword: Keyword;
}

export interface AttributeObjectQualifier extends ObjectQualifierBase {
  type: "attribute";
  attribute: ObjectAttribute;
  condition: Condition;
}

export interface ControlledByObjectQualifier extends ObjectQualifierBase {
  type: "controlledBy";
  scope: Scope;
}

export interface HasCardTypeObjectQualifier extends ObjectQualifierBase {
  type: "hasCardtype";
  cardType: CardType;
}

export interface HasColorObjectQualifier extends ObjectQualifierBase {
  type: "hasColor";
  color: Color;
}

export interface HasSubtypeObjectQualifier extends ObjectQualifierBase {
  type: "hasSubtype";
  subtype: Subtype;
}

export interface HasSupertypeObjectQualifier extends ObjectQualifierBase {
  type: "hasSupertype";
  supertype: Supertype;
}

export interface IsTappedObjectQualifier extends ObjectQualifierBase {
  type: "isTapped";
}

export interface IsTokenObjectQualifier extends ObjectQualifierBase {
  type: "isToken";
}

export interface NamedObjectQualifier extends ObjectQualifierBase {
  type: "named";
  cardName: CardName;
}

export interface IsSpellObjectQualifier extends ObjectQualifierBase {
  type: "isSpell";
}

export interface IsAbilityObjectQualifier extends ObjectQualifierBase {
  type: "isAbility";
}

export interface IsCardObjectQualifier extends ObjectQualifierBase {
  type: "isCard";
}

export interface OwnedByObjectQualifier extends ObjectQualifierBase {
  type: "ownedBy";
  scope: Scope;
}

export interface CounterObjectQualifier extends ObjectQualifierBase {
  type: "counter";
  counterName?: CounterName;
  condition: Condition;
}

//#endregion

//#region Combinatorial

export interface OrObjectQualifier extends ObjectQualifierBase {
  type: "or";
  qualifiers: ObjectQualifier[];
}

export interface AndObjectQualifier extends ObjectQualifierBase {
  type: "and";
  qualifiers: ObjectQualifier[];
}

export interface NotObjectQualifier extends ObjectQualifierBase {
  type: "not";
  qualifier: ObjectQualifier;
}

//#endregion

//#endregion

export type ObjectQualifier = (
  HasKeywordObjectQualifier   |
  AttributeObjectQualifier    |
  ControlledByObjectQualifier |
  HasCardTypeObjectQualifier  |
  HasColorObjectQualifier     |
  HasSubtypeObjectQualifier   |
  HasSupertypeObjectQualifier |
  IsTappedObjectQualifier     |
  IsTokenObjectQualifier      |
  NamedObjectQualifier        |
  IsSpellObjectQualifier      |
  IsAbilityObjectQualifier    |
  OwnedByObjectQualifier      |
  CounterObjectQualifier      |
  OrObjectQualifier           |
  AndObjectQualifier          |
  NotObjectQualifier          |
  IsCardObjectQualifier
);
