import { Pattern, r } from "@/r";

import { Variable } from "@/types/general";

export const parseVariable: Pattern<Variable> = r.reg(/[XYZ]/).as(
  ([variable]) => <Variable>variable
);
