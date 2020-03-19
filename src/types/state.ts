import { Node } from "@/reader/result";

interface StateBase {
  type: string;
}

interface PowerToughnessState extends StateBase {
  type: "powerToughness";
  power: Node<number>;
  toughness: Node<number>;
}

export type State = (
  PowerToughnessState
);
