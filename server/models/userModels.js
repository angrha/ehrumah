const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  first_name: {
    type: String,
    require: [true, 'First Name Required']
  },
  last_name: {
    type: String,
    require: [true, 'Last Name Required']
  },
  email: {
    type: String,
    unique: [true, 'Email Sudah ada'],
    validate: {
      validator: function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      message: '{VALUE} is not a valid Email'
    },
    require: [true, 'Email Required']
  },
  password: {
    type: String,
    minlength: [9, 'The value of path {PATH} ({VALUE}) exceeds the maximum allowed length ({MAXLENGTH}).'],
    require: [true, 'Password Required']
  },
  contact: {
    type: String,
    minlength: [11, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).'],
    require: [true, 'Contact Required']
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User'
  }
});

userSchema.pre('save', function(next) {

  if (this.isModified('password') || this.isNew) {
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
  }

  next();

})

const User = mongoose.model('User', userSchema);

module.exports = User;