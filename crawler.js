var request = require('request');
var $ = require('cheerio');
var co = require('co');
var _ = require('underscore');

var Model = require('./model.js');

var testForm = {
    first: false,
    pn: 313,
    sortField: 0,
    havemark:0
};

var getJson = function (form) {
    return new Promise(function (resolve, reject) {
        var companyUrl= 'http://www.lagou.com/gongsi/0-0-0.json';
        request.post({url: companyUrl, form: form}, function (err, response, body) {
            var data = JSON.parse(body).result;
            if (err || !data) {
                reject('get json error.');
            }
            resolve(data);
        });
    });
};

var getAllJson = function (pageNum) {
    return _.map(_.range(1,pageNum + 1), function (num) {
        return getJson({ first: false, pn: num, sortField: 0, havemark:0 });
    });
};

var saveJson = function *(data) {
    var count = yield Model.company.count({companyId: data.companyId});
    console.log(count);
    if (count > 0) {
        return;
    }
    var newData = new Model.company(data);
    if (newData) {
        var cbData = yield newData.save();
    }
};

co(function *(){
    var datas = yield getAllJson(313);
    datas = _.flatten(datas);
    _.map(datas, function (data) {
        co(saveJson(data));
    });
}).catch(function (erro) {
    console.log(erro);
});
