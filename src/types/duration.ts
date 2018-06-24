export interface Duration {
  type: string;
}

export interface EndOfTurnDuration extends Duration {
  type: "endOfTurn";
}
