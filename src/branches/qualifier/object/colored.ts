import { Pattern, r } from "@/r";

import { IsColoredObjectQualifier, IsColorlessObjectQualifier, IsMonocoloredObjectQualifier, IsMuticoloredObjectQualifier } from "@/types/object-qualifier";

export const parseColoredObjectQualifier: Pattern<(
  IsColorlessObjectQualifier |
  IsColoredObjectQualifier |
  IsMonocoloredObjectQualifier |
  IsMuticoloredObjectQualifier
)> = r.anyOf<(
  IsColorlessObjectQualifier |
  IsColoredObjectQualifier |
  IsMonocoloredObjectQualifier |
  IsMuticoloredObjectQualifier
)>(
  r`colorless`.as(_ => <IsColorlessObjectQualifier>{ type: "isColorless"}),
  r`colored`.as(_ => <IsColoredObjectQualifier>{ type: "isColored"}),
  // tslint:disable-next-line:max-line-length
  r`monocolored`.as(_ => <IsMonocoloredObjectQualifier>{ type: "isMonocolored"}),
  // tslint:disable-next-line:max-line-length
  r`multicolored`.as(_ => <IsMuticoloredObjectQualifier>{ type: "isMulticolored"})
);
