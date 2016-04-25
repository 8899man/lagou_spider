var mongoose = require('mongoose');
var utils = require('./utils');

exports = module.exports = utils.loadDir('models');

var lagouDb = mongoose.createConnection('mongodb://localhost/lagouDb', {});
exports.lagouDb = lagouDb;
