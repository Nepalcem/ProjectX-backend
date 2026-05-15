import User from "../../models/user/user.js";
const logout = async (req, res) => {
    const user = req.user;
    await User.findByIdAndUpdate(user._id, { token: null });
    res.status(200).json({ message: "Logged out successfully" });
};
export default logout;
//# sourceMappingURL=logout.js.map