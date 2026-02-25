import { Schema, model } from "mongoose";
import { emailRegExp, passwordRegExp } from "../../constants/regularExpressions.js";
import handleMongooseError from "../../helpers/handleMongooseError.js";
const userSchema = new Schema({
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
    verified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, "Verify token is required"],
    },
}, { versionKey: false, timestamps: true });
userSchema.post("save", handleMongooseError);
export default model("User", userSchema);
//# sourceMappingURL=user.js.map