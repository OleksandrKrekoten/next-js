require("dotenv").config();
import User from "@/models/userModel";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { email, password } = req.body;
  const storedUser = await User.findOne({ email });
  if (!storedUser) {
    return res.status(401).json({ message: "email or password is not valid" });
  }
  if (!storedUser.verify) {
    return res.status(401).json({ message: "email is not verify" });
  }
  const isPasswordValid = await bcrypt.compare(password, storedUser.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "email or password is not valid" });
  }
  const token = jwt.sign({ id: storedUser._id }, process.env.JWT_SECRET, {
    expiresIn: "10h",
  });
  const user = await User.findByIdAndUpdate(
    storedUser._id,
    { token },
    { new: true }
  );

  return res.status(200).json({
    token: user.token,
  });
}

export default login;
