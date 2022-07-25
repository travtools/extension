/* ***************************************************** */
/* *** Timers to DateTime with own timezone ************ */
/* ***************************************************** */
if (
  window.hasOwnProperty("Travian")
  && window.Travian.hasOwnProperty("TimersAndCounters")
  && !window.Travian.TimersAndCounters.hasOwnProperty("oldInitTimer")
) {
  window.Travian.TimersAndCounters.oldInitTimer = window.Travian.TimersAndCounters.initTimer;
  window.Travian.TimersAndCounters.initTimer = function (e) {
    const sec = e.getAttribute("value");
    const counting = e.getAttribute("counting");
    if ("down" === counting && sec) {
      let timeObject = new Date();
      timeObject = new Date(timeObject.getTime() + 1000 * parseInt(sec));

      e.setAttribute("title", timeObject.toLocaleString());
    }
    return window.Travian.TimersAndCounters.oldInitTimer.call(this, e);
  };
  window.Travian.TimersAndCounters.initTimers();
}


/* ***************************************************** */
/* *** RaidList **************************************** */
/* ***************************************************** */
if (
  window.hasOwnProperty("Travian")
  && window.Travian.hasOwnProperty("Game")
  && window.Travian.Game.hasOwnProperty("RaidList")
  && !window.Travian.Game.RaidList.hasOwnProperty("oldMarkSlotsOfAListForRaid")
) {
  window.Travian.Game.RaidList.oldMarkSlotsOfAListForRaid = window.Travian.Game.RaidList.markSlotsOfAListForRaid;
  window.Travian.Game.RaidList.markSlotsOfAListForRaid = function (e, t, i) {
    const returnValue = window.Travian.Game.RaidList.oldMarkSlotsOfAListForRaid.call(this, e, t, i);
    [...document.querySelectorAll('.raidList form table')].forEach((tableEl) => {
      let source = tableEl.querySelector('.selectedTroops');
      tableEl.querySelector('thead').appendChild(source);
    });
    return returnValue;
  };
}
