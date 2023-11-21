const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {

    ////  
    
    // "email": "khuonai@email.com",
    // "password": "1234567890"
    //
    //
    ///
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        email: req.body.email,
        password: hashed,
      });
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
   ////  
    
    // "email": "khuonai@email.com",
    // "password": "1234567890"
    //
    //
    ///
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).json("User wrong");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("Password wrong");
      }
      if (user && validPassword) {
        const Token = jwt.sign(
          {
            id: user.id,
          },
          process.env.Token_Key,
          { expiresIn: "2h" }
        );

        res.status(200).json({ user, Token });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;