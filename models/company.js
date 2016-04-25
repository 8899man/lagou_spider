var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lagouDb =  require('../model.js').lagouDb;
var _ = require('underscore');
var co = require('co');

var utils = require('../utils');

var CompanySchema = new Schema({
    city: {
        type: String,
        required: true
    },

    companyId: {
        type: Number,
        required: true
    },
    industryField: {
        type: String,
        required: true
    },
    companyLogo: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyShortName: {
        type: String,
        required: true
    },
    companyFeatures: {
        type: String,
        required: true
    },
    companyPositions: {
        type: Array,
        required: true
    },
    positionNum: {
        type: Number,
        required: true
    },
    createTime: {
        type: Date,
    },
    orderBy: {
        type: Number,
    },
    interviewRemarkNum: {
        type: Number,
    },
    processRate: {
        type: Number,
    },
    otherLabels: {
        type: String,
    },
    companyLabels: {
        type: String,
    },
    finaceStage: {
        type: String,
    },
    countryScore: {
        type: Number,
    },
    cityScore: {
        type: Number,
    },
    score: {
        type: Number,
    },
    searchScore: {
        type: Number,
    },
    totalCount: {
        type: Number,
    },
});

module.exports = lagouDb.model('Company', CompanySchema, 'company');
