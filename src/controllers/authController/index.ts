import ctrlWrapper from "@/helpers/ctrlWrapper.js";

import register from "./register.js";
import verifyEmail from "./verifyEmail.js";
import resendVerificationEmail from "./resendVerificationEmail.js";

const authControllers = {
  register: ctrlWrapper(register),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerificationEmail: ctrlWrapper(resendVerificationEmail),
};

export default authControllers;
