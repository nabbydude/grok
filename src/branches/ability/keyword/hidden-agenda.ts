import { Pattern, r } from "@/r";

import { HiddenAgendaKeywordAbility } from "@/types/ability";

export const parseHiddenAgendaKeywordAbility: (
  Pattern<HiddenAgendaKeywordAbility>
) = (
  r`hidden agenda`.as(_ => <HiddenAgendaKeywordAbility>{
    type: "keyword",
    keyword: "hiddenAgenda"
  })
);
