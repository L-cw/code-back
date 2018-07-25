var express = require('express');
var router = express.Router();
const uploader = require("../utils/uploader.js");
var testController = require('../controllers/test')

/* POST home page. */
router.post('/upimg', uploader.single('file'), testController.upimg);
router.post('/main/index', testController.indexData);
router.post('/main/news/list', testController.loadMore);
router.post('/forum/index', testController.forumIndex);
router.post('/forum/news/list', testController.forumLoad);

/* GET home page. */
router.get('/', testController.show);
module.exports = router;