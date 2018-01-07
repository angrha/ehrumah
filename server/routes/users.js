const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');

/* GET users listing. */
router.post('/signin', User.signIn);
router.put('/signin', User.signIn);
router.post('/signout', User.signOut);

module.exports = router;