var express = require('express');
var router = express.Router();
var common = require('./common');
const Schedule = require('../models/schedule');

/* GET home page. */
router.get('/', (req, res, next) => {
  var dayOfWeekArray = [];
  for(let i=0; i<7; i++){
    dayOfWeekArray.push(common.getAfterDate(i));
  }
  //console.log(dayOfWeekArray);//1週間の年月日が取得できているかテスト
  
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
            dayOfWeekArray[6]
          ]
      },
      order: [['date', 'ASC']]
    }).then(schedules => {
      res.render('index', {
        title: '予約状況',
        schedules: schedules
      });
    });
  } else {
    console.log("DBにデータが存在しません")
  }
  
});

module.exports = router;


