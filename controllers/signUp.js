const SignIn = require('../Modals/signinSchema');
const bcrypt=require("bcryptjs");
module.exports.SignUpUser = async function(req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    const user = new SignIn({
      name,
      email,
      password,
      confirmPassword,
    });

    await user.save();
    res.status(201).json({ user, message: 'User created' });
  } catch (err) {
    console.error('Error:', err);

    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email already registered.' });
    } else {
      return res.status(500).send();
    }
  }
};
