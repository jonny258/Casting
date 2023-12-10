const { User } = require("../models");

const findAllUsers = async (req, res) => {
  try {
    const responce = await User.findAll({});
    res.json(responce);
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
    res.status(200).json(newUserData);
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
        res.status(200).json(userData);
      }
    }

    // res.status(200).json(newUserData);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { findAllUsers, signup, login };
