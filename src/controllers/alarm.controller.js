alarmCtrls = {};

const AlarmModel = require('../models/Alarm');

// Get alls
alarmCtrls.getAllsAlarms = async (req, res, next) => {
    try {
        const alarms = await AlarmModel.find();
        //res.status(200).json(alarms);
        res.status(200).send('gghh');
    } catch (error) {
        next(error); 
    };
};

// Get one
alarmCtrls.getOneAlarm = async (req, res, next) => {
    try {
        const oneAlarm = await AlarmModel.findById({_id: req.params.id});
        res.status(200).json(oneAlarm);
    } catch (error) {
        next(error);    
    };
};

// Create alarm
alarmCtrls.createAlarm = async (req, res, next) => {
    try {
        const { time, description, doActive, week, directionSound } = req.body;
        const newAlarm = new AlarmModel({
            time,
            description,
            doActive,
            week,
            directionSound
        });
        await newAlarm.save();
        res.status(200).json({message: "Correct POST"});
    } catch (error) {
        next(error);
    };
};

// Edit alarm
alarmCtrls.editAlarm = async (req, res, next) => {
    try {
        const { time, description, doActive, week, directionSound } = req.body;
        await AlarmModel.findByIdAndUpdate({_id: req.params.id}, {
            time,
            description,
            doActive,
            week,
            directionSound
        });
        res.status(200).json({message: "Correct PUT"});
    } catch (error) {
        next(error);
    };
};

// Delete alarm
alarmCtrls.deleteAlarm = async (req, res, next) => {
    try {
        await AlarmModel.findByIdAndRemove({_id: req.params.id});
        res.status(200).json({message: "Correct DELETE"});  
    } catch (error) {
        next(error);
    };
};


module.exports = alarmCtrls;