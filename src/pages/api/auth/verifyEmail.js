import User from "@/models/userModel";
const { BadRequest } = require("http-errors");
const verifyEmail = async (req, res) => {
    try {
      const { verificationToken } = req.params;
      const user = await User.findOne({
        verificationToken,
      });
      if (!user) {
        throw BadRequest("Verify token is not valid");
      }

      const { verify } = await User.findByIdAndUpdate(
        user._id,
        {
          verify: true,
          verificationToken: null,
        },
        { new: true }
      );
      return res.redirect(`${process.env.FRONT_URL}?verify=${verify}`);
    } catch (error) {
      next(error);
    }
};