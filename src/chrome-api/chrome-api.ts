export const ChromeApi = {
  chrome_tabs_group: (options: chrome.tabs.GroupOptions): Promise<number> => {
    return new Promise((resolve) => {
      chrome.tabs.group(options, (groupId) => {
        resolve(groupId);
      });
    });
  },
  chrome_tabGroups_update: (
    groupId: number,
    updateProperties: chrome.tabGroups.UpdateProperties
  ): Promise<chrome.tabGroups.TabGroup> => {
    return new Promise((resolve) => {
      chrome.tabGroups.update(
        groupId,
        updateProperties,
        (group: chrome.tabGroups.TabGroup) => {
          resolve(group);
        }
      );
    });
  },

  chrome_storage_sync_set: (key: string, data: unknown): Promise<void> => {
    return new Promise((resolve) => {
      chrome.storage.sync.set(data, () => {
        resolve();
      });
    });
  },
  chrome_storage_sync_get: (
    key: string | string[] | object
  ): Promise<unknown> => {
    return new Promise((resolve) => {
      chrome.storage.sync.get(key, (item) => {
        resolve(item);
      });
    });
  },

  chrome_windows_getAll: (): Promise<chrome.windows.Window[]> => {
    return new Promise((resolve) => {
      chrome.windows.getAll((windows: chrome.windows.Window[]) => {
        resolve(windows);
      });
    });
  },

  chrome_tabs_query: (
    queryInfo: chrome.tabs.QueryInfo
  ): Promise<chrome.tabs.Tab[]> => {
    return new Promise((resolve) => {
      chrome.tabs.query(queryInfo, (tabs: chrome.tabs.Tab[]) => {
        resolve(tabs);
      });
    });
  },
};
