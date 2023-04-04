const dotenv = require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  return jwt.sign(
    {
        id : user._id,
        nom : user.nom,
        email : user.email,
        role : user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};