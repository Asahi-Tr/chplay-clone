const express = require('express');
let router = express.Router()

var gplay = require('google-play-scraper').memoized();

let apps = {
  ANDROID_WEAR: "ANDROID_WEAR",
  ART_AND_DESIGN: "ART_AND_DESIGN",
  AUTO_AND_VEHICLES: "AUTO_AND_VEHICLES",
  BEAUTY: "BEAUTY",
  BOOKS_AND_REFERENCE: "BOOKS_AND_REFERENCE",
  BUSINESS: "BUSINESS",
  // COMICS: "COMICS",
  // COMMUNICATION: "COMMUNICATION",
  // DATING: "DATING",
  // EDUCATION: "EDUCATION",
  // ENTERTAINMENT: "ENTERTAINMENT",
  // EVENTS: "EVENTS",
  // FINANCE: "FINANCE",
  // FOOD_AND_DRINK: "FOOD_AND_DRINK",
  // HEALTH_AND_FITNESS: "HEALTH_AND_FITNESS",
  // HOUSE_AND_HOME: "HOUSE_AND_HOME",
  // LIBRARIES_AND_DEMO: "LIBRARIES_AND_DEMO",
  // LIFESTYLE: "LIFESTYLE",
  // MAPS_AND_NAVIGATION: "MAPS_AND_NAVIGATION",
  // MEDICAL: "MEDICAL",
  // MUSIC_AND_AUDIO: "MUSIC_AND_AUDIO",
  // NEWS_AND_MAGAZINES: "NEWS_AND_MAGAZINES",
  // PARENTING: "PARENTING",
  // PERSONALIZATION: "PERSONALIZATION",
  // PHOTOGRAPHY: "PHOTOGRAPHY",
  // PRODUCTIVITY: "PRODUCTIVITY",
  // SHOPPING: "SHOPPING",
  // SOCIAL: "SOCIAL",
  // SPORTS: "SPORTS",
  // TOOLS: "TOOLS",
  // TRAVEL_AND_LOCAL: "TRAVEL_AND_LOCAL",
  // VIDEO_PLAYERS: "VIDEO_PLAYERS",
  // WEATHER: "WEATHER",
}



let randomKeysObj = (obj, num) => {

}

router.get("/home", async (req, res) => {
  let data = [];
  let promiseList = [];
  for (category in apps) {
    let promise = gplay.list({
      category: apps[category],
      num: 8
    });
    promiseList.push(promise);
    data.push({ title: category.replace(/_/g, " ") });
  }

  await Promise.all(promiseList).then(res => {
    res.forEach((item, i) => data[i].listItem = item);
  })

  res.json(data);
});

router.get("/category/:categoryID", async (req, res) => {
  let { categoryID } = req.params;
  try {
    let resp = await gplay.list({
      category: categoryID,
      num: 21
    });
    res.json([{ title: categoryID.replace(/_/g, " "), listItem: resp }]);
  } catch (e) {
    res.status(404);
  }
});

router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;