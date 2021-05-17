var fs = require('fs');
var express = require('express');
var router = express.Router();

const filename = 'data/information/test.md';

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(filename, "utf-8", (err, data) => {
    var content = "";

    if (!err) {
      content = data;
    }

    console.log(content);

    res.render('index', { title: 'Express', content: content });
  });
});

/* POST /write */
router.post('/write', function(req, res, next) {
  const content = req.body.content;
  console.log(content);

  fs.writeFile(filename, content, function (err,data) {
    if (err) {
      return console.log(err);
    }
  });

  res.redirect('/');
});

module.exports = router;
