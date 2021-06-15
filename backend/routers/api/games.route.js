const express = require('express')
let router = express.Router()

var gplay = require('google-play-scraper').memoized();

let games = {
  GAME_ACTION: 'GAME_ACTION',
  GAME_ADVENTURE: 'GAME_ADVENTURE',
  GAME_ARCADE: 'GAME_ARCADE',
  GAME_BOARD: 'GAME_BOARD',
  GAME_CARD: 'GAME_CARD',
  GAME_CASINO: 'GAME_CASINO',
  // GAME_CASUAL: 'GAME_CASUAL',
  // GAME_EDUCATIONAL: 'GAME_EDUCATIONAL',
  // GAME_MUSIC: 'GAME_MUSIC',
  // GAME_PUZZLE: 'GAME_PUZZLE',
  // GAME_RACING: 'GAME_RACING',
  // GAME_ROLE_PLAYING: 'GAME_ROLE_PLAYING',
  // GAME_SIMULATION: 'GAME_SIMULATION',
  // GAME_SPORTS: 'GAME_SPORTS',
  // GAME_STRATEGY: 'GAME_STRATEGY',
  // GAME_TRIVIA: 'GAME_TRIVIA',
  // GAME_WORD: 'GAME_WORD',
}

router.get("/home", async (req, res) => {
  let data = [];
  let promiseList = [];
  for (category in games) {
    let promise = gplay.list({
      category: games[category],
      num: 8
    });
    promiseList.push(promise);
    data.push({ title: category.replace(/_/g, " "), seemoreUrl: "/games/category/" + category });
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

module.exports = router;
