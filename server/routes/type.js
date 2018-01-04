const express = require('express');
const router = express.Router();
const Type = require('../controllers/typeController');
const Image = require('../helpers/images');

/* GET home page. */
router.POST('/create', Image.multer.single('image'), Image.sendUploadToGCS, Type.createType);
router.GET('/all', Type.getAll);
router.GET('/detail', Type.getDetail);
router.GET('/alluser', Type.getAllUser);
router.GET('/detailuser', Type.getDetailUser);
router.PUT('/update', Type.updateType);
router.DELETE('/delete', Type.removeType);

module.exports = router;