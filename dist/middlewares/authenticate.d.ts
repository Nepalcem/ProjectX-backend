import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../appTypes/appTypes.js";
export interface AuthRequest extends Request {
    user?: IUser;
}
declare const authenticate: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default authenticate;
//# sourceMappingURL=authenticate.d.ts.map