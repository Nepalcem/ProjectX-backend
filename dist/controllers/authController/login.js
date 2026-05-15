import bcrypt from "bcrypt";
import User from "../../models/user/user.js";
import HttpError from "../../helpers/httpError.js";
import createToken from "../../helpers/createToken.js";
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
        throw new HttpError(401, "Email or password is wrong");
    }
    if (!user.verified) {
        throw new HttpError(401, "Please verify your email");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new HttpError(401, "Email or password is wrong");
    }
    const token = createToken(user._id.toString());
    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
        user: {
            email: user.email,
            id: user._id.toString(),
        },
        message: "Login successful",
        token,
    });
};
export default login;
//# sourceMappingURL=login.js.map