var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

var app = require('./app');
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 80);
var server = app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);
});
