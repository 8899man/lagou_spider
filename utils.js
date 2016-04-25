var _ = require('underscore');
var fs = require('fs');
var path = require('path');

var load = function (filepath, name, app) {
    var func = function () {
        return name ? require(filepath + name) : require(filepath);
    };

    return app && func()(app) || func();
};

exports.loadDir = function (dir, app) {
    var patcher = {};
    fs.readdirSync(path.join(__dirname, dir)).forEach(function (filename) {
        if (!/\.js/.test(filename)) {
            return;
        }
        var name = path.basename(filename, '.js');
        var _load = load.bind(null, './' + dir + '/', name, app);
        patcher.__defineGetter__(name, _load);
    });
    return patcher;
};

/*
unit: year, month, day, hour, minute, secend.
 */
exports.countDateTimesByUnit = function (datas, unit) {
    var getSmallUnitDate = function (data, unit) {
        return;
    };
    _.shortBy(datas, function (data) {
        return data.createTime;
    });
};


exports.countAttributeTimes = function (datas, attribute) {
    var count = {};
    _.each(datas, function (data) {
        var countAttribute = data[attribute];
        if(countAttribute && count[countAttribute]) {
            count[countAttribute] ++;
        }
        if(countAttribute && !count[countAttribute]) {
            count[countAttribute] = 1;
        }
    });
    return count;
};
