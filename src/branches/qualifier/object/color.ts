import { Pattern, r } from "@/r";

import { HasColorObjectQualifier } from "@/types/object-qualifier";

import { parseColor } from "@/branches/color";

export const parseColorObjectQualifier: Pattern<HasColorObjectQualifier> = (
  r.defer(() => (
    // tslint:disable-next-line:max-line-length
    parseColor.as((_, color) => <HasColorObjectQualifier>{ type: "hasColor", color })
  ))
);
