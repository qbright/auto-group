import { ChromeApi } from "./chrome-api/chrome-api";
import { AppConfig, Config, GroupRule } from "./config";
import { autoGroup } from "./features/auto-group";
import { dataStore } from "./store";
import { ChromeMsg, MsgType } from "./types/msg";

function start() {
  // chrome.tabs.onCreated.addListener((tab: chrome.tabs.Tab) => {
  //   console.log(`create tab :`, tab);
  // });

  const appConfig: Config = dataStore.getAppConfig();
  chrome.tabs.onUpdated.addListener(
    async (
      tabId: number,
      changeInfo: chrome.tabs.TabChangeInfo,
      tab: chrome.tabs.Tab
    ) => {
      if (changeInfo.status === "complete" && tab.groupId === -1) {
        console.log(tabId);
        console.log(changeInfo);

        console.log(appConfig);

        const rule: GroupRule = appConfig.ruleList.filter(
          (item) => tab.url.indexOf(item.match) !== -1
        )[0];

        if (rule) {
          if (!rule.groupId) {
            // groupId 不存在
            const groupId = await ChromeApi.chrome_tabs_group({
              tabIds: [tabId],
            });

            rule.groupId = groupId;

            await ChromeApi.chrome_tabGroups_update(groupId, {
              title: rule.title,
              color: rule.color,
            });
          } else {
            await ChromeApi.chrome_tabs_group({
              groupId: rule.groupId,
              tabIds: [tabId],
            });
          }
        }
      }
    }
  );

  chrome.tabGroups.onRemoved.addListener((group: chrome.tabGroups.TabGroup) => {
    const rules = appConfig.ruleList.filter(
      (item) => group.id === item.groupId
    );

    rules.forEach((rule) => {
      rule.groupId = void 0;
    });
  });

  chrome.runtime.onMessage.addListener(
    (message: ChromeMsg, sender: never, sendResponse) => {
      switch (message.type) {
        case MsgType.AUTO_GROUP:
          autoGroup(appConfig);
          break;
      }
      sendResponse("hello");
    }
  );
}

start();
