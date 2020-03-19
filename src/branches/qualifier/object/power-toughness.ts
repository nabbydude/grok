import { Pattern, r } from "@/r";

import { PowerToughnessObjectQualifier } from "@/types/object-qualifier";

import { parseConstantValue } from "@/branches/value/constant";

// tslint:disable-next-line:max-line-length
export const parsePowerToughnessObjectQualifier: Pattern<PowerToughnessObjectQualifier> = (
  r`${parseConstantValue}/${parseConstantValue}`.as(([power, toughness]) => (
  <PowerToughnessObjectQualifier>{ type: "powerToughness", power, toughness }
  ))
);
