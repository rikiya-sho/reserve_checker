var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('schedule', { title: 'Express' });
});
router.post('/', (req, res, next) => {
  console.log(req.body); // TODO 予定と候補を保存する実装をする
  //res.redirect('/');
});
module.exports = router;
