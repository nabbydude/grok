import { Node } from "@/reader/result";

import { Action } from "@/types/action";

export type Effect = (
  OneShotEffect
);

export interface OneShotEffect {
  type: "oneShot";
  action: Node<Action>;
}

// export interface ContinuousEffect {
//   type: "continuous";
//   state: State;
//   duration: Duration;
// }
