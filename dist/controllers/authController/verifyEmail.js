import User from "../../models/user/user.js";
const { FRONTEND_URL } = process.env;
const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await User.findOne({
        verificationToken,
        verified: false,
        verificationTokenExpires: { $gt: Date.now() },
    });
    if (user) {
        user.verified = true;
        user.verificationToken = null;
        user.verificationTokenExpires = null;
        await user.save();
    }
    if (!user) {
        return res
            .status(400)
            .json({ message: "Invalid or expired verification token" });
        // .redirect(301, FRONTEND_URL/resend-verification-email)");
    }
    //   Usually for email verification you redirect to a frontend route like:
    // FRONTEND_URL=https://ageofbattles.online/login
    if (FRONTEND_URL) {
        return res.redirect(301, FRONTEND_URL);
    }
    return res.json({ message: "Email verified successfully" });
};
export default verifyEmail;
//# sourceMappingURL=verifyEmail.js.map