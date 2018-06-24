import { r } from "@/r";

import { Variable } from "@/types/general";

export const parseVariable = r.reg(/[XYZ]/).as(
  ([variable]) => <Variable>variable
);
