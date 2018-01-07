const express = require('express');
const router = express.Router();
const Type = require('../controllers/typeController');
const Image = require('../helpers/images');

/* GET home page. */
router.post('/create', Image.multer.single('image'), Image.sendUploadToGCS, Type.createType);
router.get('/all', Type.getAll);
router.get('/detail/:id', Type.getDetail);
router.get('/alluser', Type.getAllUser);
router.get('/detailuser/:id', Type.getDetailUser);
router.put('/update/:id', Image.multer.single('image'), Image.sendUploadToGCS, Type.updateType);
router.put('/nofoto/:id', Type.updateTypeNo);
router.delete('/remove/:id', Type.removeType);

module.exports = router;