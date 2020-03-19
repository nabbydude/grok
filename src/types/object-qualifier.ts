import { Node } from "@/reader/result";

import { Condition } from "@/types/condition";
import { CardName, CardType, Color, CounterName, Keyword, ObjectAttribute, Subtype, Supertype } from "@/types/general";
import { Scope } from "@/types/scope";
import { Value } from "@/types/value";
import { Zone } from "@/types/zone";

interface ObjectQualifierBase {
  type: string;
}

//#region Defs

//#region Basic

export interface InZoneObjectQualifier extends ObjectQualifierBase {
  type: "inZone";
  zone: Node<Zone>;
}

export interface HasKeywordObjectQualifier extends ObjectQualifierBase {
  type: "hasKeyword";
  keyword: Node<Keyword>;
}

export interface AttributeObjectQualifier extends ObjectQualifierBase {
  type: "attribute";
  attribute: Node<ObjectAttribute>;
  condition: Node<Condition>;
}

export interface PowerToughnessObjectQualifier extends ObjectQualifierBase {
  type: "powerToughness";
  power: Node<Value>;
  toughness: Node<Value>;
}

export interface ControlledByObjectQualifier extends ObjectQualifierBase {
  type: "controlledBy";
  scope: Node<Scope>;
}

export interface HasCardTypeObjectQualifier extends ObjectQualifierBase {
  type: "hasCardtype";
  cardType: Node<CardType>;
}

export interface IsColorlessObjectQualifier extends ObjectQualifierBase {
  type: "isColorless";
}

export interface IsColoredObjectQualifier extends ObjectQualifierBase {
  type: "isColored";
}

export interface IsMonocoloredObjectQualifier extends ObjectQualifierBase {
  type: "isMonocolored";
}

export interface IsMuticoloredObjectQualifier extends ObjectQualifierBase {
  type: "isMulticolored";
}

export interface HasColorObjectQualifier extends ObjectQualifierBase {
  type: "hasColor";
  color: Node<Color>;
}

export interface HasSubtypeObjectQualifier extends ObjectQualifierBase {
  type: "hasSubtype";
  subtype: Node<Subtype>;
}

export interface HasSupertypeObjectQualifier extends ObjectQualifierBase {
  type: "hasSupertype";
  supertype: Node<Supertype>;
}

export interface IsTappedObjectQualifier extends ObjectQualifierBase {
  type: "isTapped";
}

export interface IsUntappedObjectQualifier extends ObjectQualifierBase {
  type: "isUntapped";
}

export interface IsTokenObjectQualifier extends ObjectQualifierBase {
  type: "isToken";
}

export interface NamedObjectQualifier extends ObjectQualifierBase {
  type: "named";
  cardName: Node<CardName>;
}

export interface IsSpellObjectQualifier extends ObjectQualifierBase {
  type: "isSpell";
}

export interface IsPermanentCardObjectQualifier extends ObjectQualifierBase {
  type: "isPermanentCard";
}

export interface IsPermanentObjectQualifier extends ObjectQualifierBase {
  type: "isPermanent";
}

export interface IsAbilityObjectQualifier extends ObjectQualifierBase {
  type: "isAbility";
}

export interface IsCardObjectQualifier extends ObjectQualifierBase {
  type: "isCard";
}

export interface OwnedByObjectQualifier extends ObjectQualifierBase {
  type: "ownedBy";
  scope: Node<Scope>;
}

export interface CounterObjectQualifier extends ObjectQualifierBase {
  type: "counter";
  counterName?: Node<CounterName>;
  condition: Node<Condition>;
}

//#endregion

//#region Combinatorial

export interface OrObjectQualifier extends ObjectQualifierBase {
  type: "or";
  qualifiers: Node<ObjectQualifier>[];
}

export interface AndObjectQualifier extends ObjectQualifierBase {
  type: "and";
  qualifiers: Node<ObjectQualifier>[];
}

export interface NotObjectQualifier extends ObjectQualifierBase {
  type: "not";
  qualifier: Node<ObjectQualifier>;
}

//#endregion

//#endregion

export type ObjectQualifier = (
  HasKeywordObjectQualifier   |
  AttributeObjectQualifier    |
  PowerToughnessObjectQualifier |
  ControlledByObjectQualifier |
  HasCardTypeObjectQualifier  |
  IsColorlessObjectQualifier   |
  IsColoredObjectQualifier     |
  IsMonocoloredObjectQualifier |
  IsMuticoloredObjectQualifier |
  HasColorObjectQualifier     |
  HasSubtypeObjectQualifier   |
  HasSupertypeObjectQualifier |
  IsTappedObjectQualifier     |
  IsUntappedObjectQualifier   |
  IsTokenObjectQualifier      |
  NamedObjectQualifier        |
  IsSpellObjectQualifier      |
  IsPermanentCardObjectQualifier |
  IsPermanentObjectQualifier     |
  IsAbilityObjectQualifier    |
  OwnedByObjectQualifier      |
  CounterObjectQualifier      |
  OrObjectQualifier           |
  AndObjectQualifier          |
  NotObjectQualifier          |
  IsCardObjectQualifier
);
