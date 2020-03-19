import { Pattern, r } from "@/r";

import { HasKeywordObjectQualifier } from "@/types/object-qualifier";

import { parseKeyword } from "@/branches/keyword";

export const parseKeywordWithObjectQualifier: (
  Pattern<HasKeywordObjectQualifier>
) = r.defer(() => parseKeyword.as(
  (_, keyword) => <HasKeywordObjectQualifier>{ type: "hasKeyword", keyword }
));
