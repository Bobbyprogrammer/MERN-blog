import bcryptjs from "bcryptjs";
import User from "../models/user.model.js"
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res
        .status(404)
        .json({ message: "All Fields are required", success: false });
    }
    const existingUser = await User.findOne({ email, username });
    if (existingUser) {
      res
        .status(400)
        .json({
          message: "user already exists with this email or username",
          success: false,
        });
    }

    const hashedPassword =await  bcryptjs.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    const saveUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User Registered Successfully", succes: true,saveUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
