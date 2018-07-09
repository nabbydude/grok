import { Pattern, r } from "@/r";

import { AndObjectQualifier, AttributeObjectQualifier } from "@/types/object-qualifier";

export const parsePowerToughnessObjectQualifier: Pattern<AndObjectQualifier> = (
  r.reg(/(\d+)\/(\d+)/).as(([_, power, toughness]) => <AndObjectQualifier>{
    type: "and",
    qualifiers: [
      <AttributeObjectQualifier>{
        type: "attribute",
        attribute: "power",
        condition: {
          operator: "=",
          value: { type: "constant", value: Number(power) }
        }
      },
      <AttributeObjectQualifier>{
        type: "attribute",
        attribute: "toughness",
        condition: {
          operator: "=",
          value: { type: "constant", value: Number(toughness) }
        }
      }
    ]
  })
);
