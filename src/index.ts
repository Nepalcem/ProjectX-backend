import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import type { Express, NextFunction, Request, Response } from "express";
import AppError from "./errorHandler/errorHandler.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, "../environment", ".env") });
const { PORT } = process.env || 3000;

const app: Express = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(
  (
    err: AppError,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message: message });
    return Promise.resolve();
  }
);

app.get("/", (_req, res) => {
  res.send(console.log("Its alive!1"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
