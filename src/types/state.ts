interface StateBase {
  type: string;
}

interface PowerToughnessState extends StateBase {
  type: "powerToughness";
  power: number;
  toughness: number;
}

export type State = (
  PowerToughnessState
);
