import { Schema, model } from "mongoose";
import { emailRegExp } from "../../constants/regularExpressions.js";

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
    },
});
export default model("User", userSchema);
//# sourceMappingURL=user.js.map