const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Password confirmation does not match the password.',
    },
  },
});

const SignIn = mongoose.model('SignIn', signInSchema);

module.exports = SignIn;
