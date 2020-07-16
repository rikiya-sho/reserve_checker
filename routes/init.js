var express = require('express');
var router = express.Router();
var common = require('./common');
const Schedule = require('../models/schedule');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/schedules/');//公開後はこちらを有効
  //res.render('init', { schedule: req.body });//公開時に1回だけ実行
  //dbInit();//公開時に1回だけ実行
});

//データベース初期設定------------------------------
//2020.7.16より9900日分DB作成
function dbInit(){
  var day 
  for(let i=0; i<9900; i++){
    day = common.getAfterDate(i);
    console.log(day)

    Schedule.upsert({
      date: day,
      reserve_9_00: 0,
      reserve_9_30: 0,
      reserve_10_00: 0,
      reserve_10_30: 0,
      reserve_11_00: 0,
      reserve_11_30: 0,
      reserve_12_00: 0,
      reserve_16_00: 0,
      reserve_16_30: 0,
      reserve_17_00: 0,
      reserve_17_30: 0,
      reserve_18_00: 0,
      reserve_18_30: 0,
      reserve_19_00: 0,
      reserve_19_30: 0,
      reserve_20_00: 0
    });
  }
  
}

//afterDay日後までの年月日を取得---------------------
/*
function getAfterDate(afterDay) {
  var date = new Date();
  date.setDate(date.getDate() + afterDay);
  var year  = date.getFullYear();
  var month = ("0"+(date.getMonth() + 1)).slice(-2);
  var day   = ("0"+date.getDate()).slice(-2);
  var today = year + "-" + month + "-" + day;
  return today; 
}*/

module.exports = router;
