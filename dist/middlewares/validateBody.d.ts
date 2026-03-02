import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";
declare const validateBody: (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => void;
export default validateBody;
//# sourceMappingURL=validateBody.d.ts.map