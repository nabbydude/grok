import { r } from "@/r";

import { HasColorObjectQualifier } from "@/types/object-qualifier";

import { parseColor } from "@/branches/color";

export const parseColorObjectQualifier = parseColor.as(
  color => <HasColorObjectQualifier>{ type: "hasColor", color }
);
