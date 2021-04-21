export enum RULE_MATCH_TYPE {
  REG = 1,
  STR = 2,
}

export enum GROUP_COLOR {
  GREY = "grey",
  BLUE = "blue",
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green",
  PINK = "pink",
  PURPLE = "purple",
  CYAN = "cyan",
}

export interface GroupRule {
  matchType: RULE_MATCH_TYPE;
  match: string;
  title: string;
  restartOpen: boolean;
  id: string;
  color: GROUP_COLOR;
  groupId?: number;
}
export interface Config {
  ruleList: GroupRule[];
  distinguishWindow: boolean;
}

export interface PageConfig {
  url: string;
  id: string;
}

export const AppConfig: Config = {
  distinguishWindow: false,
  ruleList: [
    {
      matchType: RULE_MATCH_TYPE.STR,
      match: "github.com",
      title: "github",
      restartOpen: false,
      id: "456",
      color: GROUP_COLOR.BLUE,
    },
    {
      matchType: RULE_MATCH_TYPE.STR,
      match: "baidu.com",
      title: "baidu",
      restartOpen: false,
      id: "123",
      color: GROUP_COLOR.YELLOW,
    },
  ],
};
export const PageSet: PageConfig[] = [];
