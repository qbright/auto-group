document.getElementById("do-groups").addEventListener("click", () => {
  console.log("click");

  chrome.runtime.sendMessage({ a: 1 }, (...args) => {
    console.log(args);
  });
});
