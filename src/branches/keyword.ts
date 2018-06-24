import { r } from "@/r";

import { Keyword } from "@/types/general";

import { KEYWORDS } from "@/data";

export const parseKeyword = r.anyOf(...KEYWORDS.map(
  keyword => r.reg(new RegExp(keyword, "i")).as(_ => <Keyword>keyword)
));
