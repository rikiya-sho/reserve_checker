var express = require('express');
var router = express.Router();
const Schedule = require('../models/schedule');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', (req, res, next) => {
  const title = 'Express';
  if (Schedule) {
    Schedule.findAll({
      order: [['date', 'DESC']]
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
