import { ChromeMsg } from "../types/msg";

export const ChromeMessage = {
  send: async (msg: ChromeMsg) => {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(msg, (...args) => {
        console.log(args);
        resolve(131);
      });
    });
  },
};
