import { r } from "@/r";

import { IngestKeywordAbility } from "@/types/ability";

export const parseIngestKeywordAbility = r`ingest`.as(
  _ => <IngestKeywordAbility>{ type: "keyword", keyword: "ingest" }
);
