import { r } from "@/r";

import { Color } from "@/types/general";

export const parseColor = r.reg(/white|blue|black|red|green/i).as(
  ([color]) => <Color>color.toLowerCase()
);
