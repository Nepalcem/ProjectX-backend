import User from "../../models/user/user.js";
import HttpError from "../../helpers/httpError.js";
const { FRONTEND_URL } = process.env;
const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    const existingUser = await User.findOne({ verificationToken });
    if (!existingUser) {
        throw new HttpError(400, "Invalid verification token or User not found");
    }
    await User.findByIdAndUpdate(existingUser._id, {
        verified: true,
        verificationToken: null,
    });
    //   Usually for email verification you redirect to a frontend route like:
    // FRONTEND_URL=https://ageofbattles.online/verified
    if (FRONTEND_URL) {
        return res.redirect(301, FRONTEND_URL);
    }
    return res.json({ message: "Email verified successfully" });
};
export default verifyEmail;
//# sourceMappingURL=verifyEmail.js.map