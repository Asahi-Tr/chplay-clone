const express = require('express')
let router = express.Router()

var gplay = require('google-play-scraper').memoized();

router.get('/:appid', async (req, res) => {
  let { appid } = req.params;
  try {
    let appDetail = await gplay.app({ appId: appid });
    res.json(appDetail);
  } catch (e) {
    console.error(e);
  }
});

router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;