const bcrypt = require("bcrypt");
const createError = require("http-errors");
const { v4 } = require("uuid");
import ConnectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";

async function register(req, res, next) {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const storedUser = await User.findOne({ email });

  if (storedUser) {
    return next(createError(409, "Email in use"));
  }

  try {
    const hashedPassword = bcrypt.hash(password, salt);
    const verificationToken = v4();
    await ConnectMongo();
    const user = await User.create({
      email,
      password: await hashedPassword,
      verificationToken,
    });
    res.json({ user });
  } catch (error) {
    next(createError(409, error.message));
  }
}
export default register;
