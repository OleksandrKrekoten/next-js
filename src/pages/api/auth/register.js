const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
import ConnectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";

async function register(req, res) {
  await ConnectMongo();
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const storedUser = await User.findOne({ email });

  if (storedUser) {
    return res.status(409).json({ message: " Email in use" });
  }

  try {
    const hashedPassword = bcrypt.hash(password, salt);
    const verificationToken = v4();

    const user = await User.create({
      email,
      password: await hashedPassword,
      verificationToken,
    });
    res.json({ user });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}
export default register;
