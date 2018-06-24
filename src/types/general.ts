import { Ability } from "@/types/ability";

export type ObjectAttribute = (
  "power"             |
  "toughness"         |
  "convertedManaCost" |
  "colors"
);

export type CounterName = string;
export type Keyword = string;

export type Color = "white" | "blue" | "black" | "red" | "green";

export type CardName = string;
export type Supertype = string;
export type CardType = string;
export type Subtype = string;

export type Variable = "X" | "Y" | "Z";

export interface Mana {
  [type: string]: number;
}

export interface Card {
  abilities: Ability[];
}
