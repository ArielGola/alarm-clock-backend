const { Schema, model } = require('mongoose');

const newAlarm = new Schema({
    time: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    doActive: {
        type: Boolean,
    },
    week: [],
    directionSound: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('AlarmModel', newAlarm);