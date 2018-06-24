import { readFileSync } from "fs";
import { join } from "path";

// tslint:disable:max-line-length
export const CARD_NAMES: CardNames  = JSON.parse(readFileSync(join(__dirname, "../data/card-names.json"), "utf8"));
export const CARD_TYPES: CardTypes  = JSON.parse(readFileSync(join(__dirname, "../data/card-types.json"), "utf8"));
export const COUNTERS  : Counters   = JSON.parse(readFileSync(join(__dirname, "../data/counters.json"  ), "utf8"));
export const KEYWORDS  : Keywords   = JSON.parse(readFileSync(join(__dirname, "../data/keywords.json"  ), "utf8"));
export const SUBTYPES  : Subtypes   = JSON.parse(readFileSync(join(__dirname, "../data/subtypes.json"  ), "utf8"));
export const SUPERTYPES: Supertypes = JSON.parse(readFileSync(join(__dirname, "../data/supertypes.json"), "utf8"));
// tslint:enable

interface Term {
  singular: string;
  plural: string;
}

type CardNames  = string[];
type CardTypes  = Term[];
type Counters   = string[];
type Keywords   = string[];
type Subtypes   = Term[];
type Supertypes = Term[];
