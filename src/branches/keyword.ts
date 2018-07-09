import { Pattern, r } from "@/r";

import { Keyword } from "@/types/general";

import { KEYWORDS } from "@/data";

export const parseKeyword: Pattern<Keyword> = r.anyOf(...KEYWORDS.map(
  keyword => r.reg(new RegExp(keyword, "i")).as(_ => <Keyword>keyword)
));
