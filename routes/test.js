var express = require('express');
var router = express.Router();
var testController = require('../controllers/test')
var multer = require('multer');
var upload = multer({dest:"/upload"});

/* POST home page. */
router.post('/upimg', testController.upimg);
router.post('/main/index', testController.indexData);
router.post('/main/news/list', testController.loadMore);
router.post('/forum/index', testController.forumIndex);
router.post('/forum/news/list', testController.forumLoad);

/* GET home page. */
router.get('/', testController.show);
module.exports = router;