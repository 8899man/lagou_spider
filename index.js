var koa = require('koa');
var app = koa();
var router = require('./routes');

app.use(router.routes());

console.log('listen 8000');
app.listen(8000);
