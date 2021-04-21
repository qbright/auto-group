import { ChromeApi } from "../chrome-api/chrome-api";
import { Config } from "../config";
export async function autoGroup(appConfig: Config) {
  const windows: chrome.windows.Window[] = await ChromeApi.chrome_windows_getAll();
  const windowsIds: number[] = windows.map((item) => item.id);

  const windowTabMap = new Map<number, chrome.tabs.Tab[]>();

  for (let i = 0; i < windowsIds.length; i++) {
    const windowId = windowsIds[i];
    const tabs = await ChromeApi.chrome_tabs_query({ windowId });
    windowTabMap.set(windowId, tabs);
  }

  if (appConfig.distinguishWindow) {
    // 区分window
  } else {
  }
  console.log(windowTabMap, appConfig);
}

function groupDistinguishWindow() {

}

function groupDonoDistinguishWindow() {

}