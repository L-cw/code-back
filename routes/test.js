var express = require('express');
var router = express.Router();
var testController = require('../controllers/test')
var multer = require('multer');
var upload = multer({dest:"/upload"});

/* POST home page. */
router.post('/upimg', testController.upimg);
router.post('/index', testController.indexData);
router.post('/load', testController.loadMore);

/* GET home page. */
router.get('/', testController.show);
module.exports = router;