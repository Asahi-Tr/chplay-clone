const express = require('express')
const app = express()
const port = 3001;

const apiCollectionRoute = require('./routers/api/collection.route');
const apiAppsRoute = require('./routers/api/apps.route');
const apiGamesRoute = require('./routers/api/games.route');
const apiDetail = require('./routers/api/detail.route');

var logReq = function (req, res, next) {
  console.log(req.method, req.url, '---- ' + new Date().toTimeString());
  next();
}

app.use(logReq)

app.use('/api/collection', apiCollectionRoute);
app.use('/api/apps', apiAppsRoute);
app.use('/api/games', apiGamesRoute);
app.use('/api/details', apiDetail);




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})