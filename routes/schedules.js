var express = require('express');
var router = express.Router();
const Schedule = require('../models/schedule');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('schedule', { schedule: req.body });
});
router.post('/', (req, res, next) => {
  console.log(req.body); // TODO 予定と候補を保存する実装をする
  res.redirect('/');

  Schedule.upsert({
    date: req.body.date,
    reserve_9_00: req.body.reserve_9_00/*,
    reserve_9_30: req.body.reserve_9_30,
    reserve_10_00: req.body.reserve_10_00,
    reserve_10_30: req.body.reserve_10_30,
    reserve_11_00: req.body.reserve_11_00,
    reserve_11_30: req.body.reserve_11_30,
    reserve_12_00: req.body.reserve_12_00,
    reserve_16_00: req.body.reserve_16_00,
    reserve_16_30: req.body.reserve_16_30,
    reserve_17_00: req.body.reserve_17_00,
    reserve_17_30: req.body.reserve_17_30,
    reserve_18_00: req.body.reserve_18_00,
    reserve_18_30: req.body.reserve_18_30,
    reserve_19_00: req.body.reserve_19_00,
    reserve_19_30: req.body.reserve_19_30,
    reserve_20_00: req.body.reserve_20_00*/
  });
  
});
module.exports = router;
