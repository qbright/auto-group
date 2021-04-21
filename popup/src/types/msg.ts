export enum MsgType {
  AUTO_GROUP = 1,
}

export interface ChromeMsg {
  type: MsgType;
  payload?: unknown;
}
