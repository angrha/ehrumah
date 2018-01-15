const express = require('express');
const router = express.Router();
const Type = require('../controllers/typeController');
const Image = require('../helpers/images');
const Auth = require('../middleware/auto');

/* GET home page. */
router.post('/create', Auth.isLogin, Image.multer.single('image'), Image.sendUploadToGCS, Type.createType);
router.get('/all', Type.getAll);
router.get('/detail/:id', Type.getDetail);
router.get('/search', Type.getSearch);
router.get('/alluser', Auth.isLogin, Type.getAllUser);
router.get('/detailuser/:id', Auth.isLogin, Type.getDetailUser);
router.put('/update/:id', Auth.isLogin, Image.multer.single('image'), Image.sendUploadToGCS, Type.updateType);
router.put('/nofoto/:id', Auth.isLogin, Type.updateTypeNo);
router.delete('/remove/:id', Auth.isLogin, Type.removeType);

module.exports = router;