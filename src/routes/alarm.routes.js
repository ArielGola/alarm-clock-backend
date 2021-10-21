const router = require('express').Router();

const {
    getAllsAlarms,
    getOneAlarm,
    createAlarm,
    editAlarm,
    deleteAlarm
} = require('../controllers/alarm.controller');

router.get('/', getAllsAlarms);

router.get('/:id', getOneAlarm);

router.post('/', createAlarm),

router.put('/:id', editAlarm);

router.delete('/:id', deleteAlarm);


module.exports = router;