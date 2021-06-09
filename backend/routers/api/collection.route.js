const express = require('express')
let router = express.Router()

var gplay = require('google-play-scraper').memoized();

router.get('/', async (req, res) => {
  let a = await gplay.list({
    // category: gplay.category.GAME_ACTION,
    collection: gplay.collection.TOP_FREE,
    num: 8
  });

  res.json(a);
});

router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;