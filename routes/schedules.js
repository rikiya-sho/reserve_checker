var express = require('express');
var router = express.Router();
var common = require('./common');
const Schedule = require('../models/schedule');

/* GET users listing. */
router.get('/', (req, res, next) => {
  
  var dayOfWeekArray = [];
  for(let i=0; i<14; i++){
    dayOfWeekArray.push(common.getAfterDate(i));
  }
  //console.log(dayOfWeekArray);//2週間の年月日が取得できているかテスト

  if (Schedule) {
    Schedule.findAll({
      where: {
          date: [
            dayOfWeekArray[0],
            dayOfWeekArray[1],
            dayOfWeekArray[2],
            dayOfWeekArray[3],
            dayOfWeekArray[4],
            dayOfWeekArray[5],
            dayOfWeekArray[6],
            dayOfWeekArray[7],
            dayOfWeekArray[8],
            dayOfWeekArray[9],
            dayOfWeekArray[10],
            dayOfWeekArray[11],
            dayOfWeekArray[12],
            dayOfWeekArray[13]
          ]
      },
      order: [['date', 'ASC']]
    }).then(schedules => {
      res.render('schedule', {
        title: '予約編集',
        schedules: schedules
      });
     //res.json(schedules);
     console.log(schedules[0].date)
    });
  } else {
    console.log("DBにデータが存在しません")
  }
  
});

router.post('/', (req, res, next) => {
  //console.log(req.body); 
  res.redirect('/schedules/?y=' + req.body.yOffset + '&n=' + common.randomNum());

  Schedule.upsert({
    date: req.body.date,
    reserve_9_00: req.body.reserve_9_00,
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
    reserve_20_00: req.body.reserve_20_00
  });

});
module.exports = router;




