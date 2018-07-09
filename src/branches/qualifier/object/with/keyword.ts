import { Pattern, r } from "@/r";

import { HasKeywordObjectQualifier } from "@/types/object-qualifier";

import { parseKeyword } from "@/branches/keyword";

export const parseKeywordWithObjectQualifier: (
  Pattern<HasKeywordObjectQualifier>
) = (
  parseKeyword.as(
    keyword => <HasKeywordObjectQualifier>{ type: "hasKeyword", keyword }
  )
);
