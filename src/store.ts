import { ChromeApi } from "./chrome-api/chrome-api";
import { AppConfig, Config } from "./config";
const appConfigKey = "app_config";

class DataStore {
  private appConfig: Config = AppConfig;
  private isInit: boolean = false;
  constructor() {
    this.init();
  }
  async init() {
    if (!this.isInit) {
      const ac = (await ChromeApi.chrome_storage_sync_get(
        appConfigKey
      )) as Config;
      if (!ac.ruleList) {
        //noinit
        await ChromeApi.chrome_storage_sync_set(appConfigKey, this.appConfig);
      } else {
        this.appConfig = ac;
      }
    }
  }
  getAppConfig() {
    return this.appConfig;
  }
}

export const dataStore = new DataStore();
