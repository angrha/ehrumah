const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');
const Auth = require('../middleware/auto');
 
/* GET users listing. */
router.post('/signin', User.signIn);
router.put('/signin', User.signIn);
router.post('/signout', User.signOut);
router.get('/getuser', Auth.isLogin, User.getUser);


module.exports = router;