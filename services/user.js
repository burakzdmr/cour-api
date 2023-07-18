const User = require("../models/user");

const Signup = async (user) => {
  const newUser = new User(user);
  try {
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    console.log("error:", err);
    return "error";
  }
};

const Signin = async (username, password) => {
  try {
    const user = await User.findOne({
      username: username,
      password: password,
    });
    return user;
  } catch (err) {
    console.log("error:", err);
    return "error";
  }
};

module.exports = {
  Signin,
  Signup,
};
