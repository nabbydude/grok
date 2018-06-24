import { Action } from "@/types/action";

export type Effect = (
  OneShotEffect
);

export interface OneShotEffect {
  type: "oneShot";
  action: Action;
}

// export interface ContinuousEffect {
//   type: "continuous";
//   state: State;
//   duration: Duration;
// }
