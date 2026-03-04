import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import register from "./register.js";
import verifyEmail from "./verifyEmail.js";
const authControllers = {
    register: ctrlWrapper(register),
    verifyEmail: ctrlWrapper(verifyEmail),
};
export default authControllers;
//# sourceMappingURL=index.js.map