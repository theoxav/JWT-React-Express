const bcrypt = require("bcrypt");
const UserModel = require("../database/models/user");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(400).json("Email already exists");
    } else {
      res.status(400).json(err);
    }
  }
};

module.exports = createUser;
