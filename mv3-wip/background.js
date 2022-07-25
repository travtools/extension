

  // document.addEventListener('DOMContentLoaded', function() {
  //   console.log(window, window.Travian, document);
  // });
// function reddenPage() {
//   // console.log(window, window.Travian, document);
//   // console.log(window.Travian, document);
//   // window.Travian.TimersAndCounters.oldinitTimer = window.Travian.TimersAndCounters.initTimer;
//   // window.Travian.TimersAndCounters.initTimer = function (e) {
//   //   const sec = parseInt(e.getAttribute('value'));
//   //   let timeObject = new Date();
//   //   timeObject = new Date(timeObject.getTime() + 1000 * sec);

//   //   e.setAttribute('title', timeObject.toLocaleTimeString());
//   //   return window.Travian.TimersAndCounters.oldinitTimer.call(this, e);
//   // };
//   // window.Travian.TimersAndCounters.initTimers();
// }

// chrome.tabs.onActivated.addListener(async (activeInfo) => {
//   chrome.tabs.get(activeInfo.tabId, async (tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: reddenPage
//     });
//     // let muted = !tab.mutedInfo.muted;
//     // await chrome.tabs.update(tabId, { muted });
//     // console.log(`Tab ${tab.id} is ${ muted ? 'muted' : 'unmuted' }`);
//   });
//   // let tab = await chrome.tabs.get(activeInfo.tabId);

//   // // if(tab.url) {
//   //   chrome.scripting.executeScript({
//   //     target: { tabId: activeInfo.tabId },
//   //     function: reddenPage
//   //   });
//   // }
// });


// // chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
// //   // console.log('uncomplete', tabId, changeInfo, tab);
// //   // if (changeInfo.status === 'complete') {
// //   //   console.log('complete', tabId, changeInfo, tab);

// //     chrome.scripting.executeScript({
// //       target: { tabId: tab.id },
// //       function: reddenPage
// //     });
// //   // }
// // });

// // chrome.runtime.onInstalled.addListener(async () => {
// //   let queryOptions = { active: true, lastFocusedWindow: true };
// //   // `tab` will either be a `tabs.Tab` instance or `undefined`.
// //   let [tab] = await chrome.tabs.query(queryOptions);

// //   if(tab.url) {
// //     chrome.scripting.executeScript({
// //       target: { tabId: tab.id },
// //       function: reddenPage
// //     });
// //   }

// //   // Finally, let's log the ID of the newly created tab using a template literal.
// //   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// //   //
// //   // To view this log message, open chrome://extensions, find "Hello, World!", and click the
// //   // "service worker" link in the card to open DevTools.
// //   console.log(`Created tab ${tab.id}`);
// // });
