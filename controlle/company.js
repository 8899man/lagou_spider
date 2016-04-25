var Model = require('../model');

exports.countCity = function (query) {
    var self = this;
    return co(function *() {
        var datas = yield Model.company.find(query).select('city');
        datas = utils.countAttributeTimes(datas, 'city');
        datas = _.filter(_.map(datas, function(num, city) {
            if (num > 1) {
                return {
                    name: city,
                    value: num
                };
            }
        }));
        return _.sortBy(datas, function (data) {
            return - data.number;
        });
    });
};

exports.countTime = function (query) {
    var self = this;
    return co(function *() {
        var datas = yield Model.company.find(query).select('createTime');
        datas = _.sortBy(datas, function (data) {
            return data.createTime;
        });
    });
};

exports.countFinanceTime = function () {
    var self = this;
    return co(function *() {

    });
};

exports.countScale = function () {

};
