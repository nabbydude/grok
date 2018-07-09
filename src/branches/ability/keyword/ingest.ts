import { Pattern, r } from "@/r";

import { IngestKeywordAbility } from "@/types/ability";

export const parseIngestKeywordAbility: Pattern<IngestKeywordAbility> = (
  r`ingest`.as(
    _ => <IngestKeywordAbility>{ type: "keyword", keyword: "ingest" }
  )
);
