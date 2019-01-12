var express = require('express');
var router = express.Router();
// const uploader = require("../utils/uploader.js");
var testController = require('../controllers/test')

/* POST home page. */
// router.post('/upimg', uploader.single('file'), testController.upimg);
router.post('/mall/v1/list', testController.indexData);
router.post('/mall/v1/goods/detail', testController.getGoodsDetail);
router.post('/forum/index', testController.forumIndex);
router.post('/forum/news/list', testController.forumLoad);

/* GET home page. */
router.get('/', testController.show);
module.exports = router;