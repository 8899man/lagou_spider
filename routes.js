var router = require('koa-router')();
var controlle = require('./controlle');

router.get('/', function * (next) {
    this.body = 'hello';
    console.log(this);
});

module.exports = exports = router;
