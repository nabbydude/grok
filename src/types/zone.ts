interface ZoneBase {
  type: string;
}

export interface BattlefieldZone extends ZoneBase {
  type: "battlefield";
}

export type Zone = (
  BattlefieldZone
);
