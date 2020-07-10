var express = require('express');
var router = express.Router();
const Schedule = require('../models/schedule');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', (req, res, next) => {
  console.log(dayOfWeekArray);
  const title = 'Express';
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
        schedules: schedules
      });
    });
  } else {
    console.log("DBにデータが存在しません")
  }
  
});

module.exports = router;


//今日から1週間の年月日を取得---------------------
function getAfterDate(afterDay) {
  var date = new Date();
  date.setDate(date.getDate() + afterDay);
  var year  = date.getFullYear();
  var month = ("0"+(date.getMonth() + 1)).slice(-2);
  var day   = ("0"+date.getDate()).slice(-2);
  var today = year + "-" + month + "-" + day;
  return today; 
}
var dayOfWeekArray = [];
for(let i=0; i<7; i++){
  dayOfWeekArray.push(getAfterDate(i));
}
