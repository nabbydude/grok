import { Pattern, r } from "@/r";

import { Color } from "@/types/general";

export const parseColor: Pattern<Color> = (
  r.reg(/white|blue|black|red|green/i).as(
    ([color]) => <Color>color.toLowerCase()
  )
);
