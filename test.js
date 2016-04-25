var co = require('co');
var Model = require('./model');

co(function *(){
    var data = yield Model.company.countCity();
    console.log(data);
    return data;
}).catch(function (error) {
    console.log(error);
});
