const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');

/* GET users listing. */
router.POST('/signin', User.signIn);
router.PUT('/signin', User.signIn);
router.GET('/signout', User.signOut);

module.exports = router;