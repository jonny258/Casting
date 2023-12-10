const { User } = require("../models");
const { signToken } = require("../utils/auth");

const findAllUsers = async (req, res) => {
  try {
    const response = await User.findAll({});
    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUserData = await User.create({
      username: username,
      password: password,
    });
    const token = signToken(newUserData);
    res.status(200).json({ token: token, user: newUserData });
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userData = await User.findOne({
      where: {
        username: username,
      },
    });
    if (!userData) {
      console.log("Username failed");
      res.status(500).json("The username is not correct");
    } else {
      const isMatch = await userData.isCorrectPassword(password);
      if (!isMatch) {
        res.status(500).json("The password is incorrect");
      } else {
        const token = signToken(userData);
        res.status(200).json({ token: token, user: userData });
      }
    }

    // res.status(200).json(newUserData);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { findAllUsers, signup, login };
