import ctrlWrapper from "@/helpers/ctrlWrapper.js";

import register from "./register.js";
import verifyEmail from "./verifyEmail.js";
import resendVerificationEmail from "./resendVerificationEmail.js";
import forgotPassword from "./forgotPassword.js";
import resetPassword from "./resetPassword.js";

const authControllers = {
  register: ctrlWrapper(register),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerificationEmail: ctrlWrapper(resendVerificationEmail),
  forgotPassword: ctrlWrapper(forgotPassword),
  resetPassword: ctrlWrapper(resetPassword),
};

export default authControllers;
