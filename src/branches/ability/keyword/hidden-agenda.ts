import { r } from "@/r";

import { HiddenAgendaKeywordAbility } from "@/types/ability";

export const parseHiddenAgendaKeywordAbility = r`hidden agenda`.as(
  _ => <HiddenAgendaKeywordAbility>{ type: "keyword", keyword: "hiddenAgenda" }
);
