import express from "express";
import logger from "morgan";
import cors from "cors";
import AppError from "./errorHandler/errorHandler.js";
const authRouter = await import("./routes-Api/authRouter.js");
export const app = express();
app.set("trust proxy", 1);
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
    res.send(console.log("Its alive!1"));
});
app.use("/auth", authRouter.default);
app.use((err, _req, res, _next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});
//# sourceMappingURL=app.js.map