import ctrlWrapper from "@/helpers/ctrlWrapper.js";

import register from "./register.js";

const authControllers = {
  register: ctrlWrapper(register),
};

export default authControllers;
