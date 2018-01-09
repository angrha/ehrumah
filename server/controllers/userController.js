const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let signIn = (req, res) => {
  
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    contact: req.body.contact,
    role: req.body.role
  })

  newUser.save()
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })

}

let signOut = (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then((result) => {
      if (!result) {
        res.status(403).json({
          msg: 'Maaf User Tidak Ada',
          login: false
        })
      }

      if (!bcrypt.compareSync(req.body.password, result.password)) {
        res.status(403).json({
          msg: 'Maaf Password Anda Salah',
          login: false
        })
      }

      jwt.sign({
	      id: result._id,
        email: result.email,
        first: result.first_name
      }, process.env.SECRET_KEY, (err, token) => {
        res.status(200).json({
          msg: 'Login Sukses',
          access_token: token
        })
      });

    })
    .catch((err) => {
      res.status(500).json(err);
    })
};

let getUser = (req, res) => {
  User.findOne({
      _id: req.getData.id
    })
    .then((result) => {
        res.status(200).json({
          data: result
        })
    })
    .catch((err) => {
      res.status(500).json(err);
    })
};

module.exports = {
  signIn,
  signOut,
  getUser
}
