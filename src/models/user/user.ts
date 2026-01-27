import { Schema, model } from "mongoose";
import {
  emailRegExp,
  passwordRegExp,
  nicknameRegExp,
} from "@/constants/regularExpressions.js";

import type { IUser } from "@/appTypes/appTypes.js";

const userSchema: Schema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegExp,
    },
    password: {
      type: String,
      required: true,
      match: passwordRegExp,
    },
    token: {
      type: String,
      default: null,
    },
    nickname: {
      type: String,
      required: true,
      unique: true,
      match: nicknameRegExp,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true },
);

export default model<IUser>("User", userSchema);
