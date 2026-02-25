import type { Request, Response, NextFunction } from "express";
import type { ZodTypeAny } from "zod";
declare const validateBody: (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => void;
export default validateBody;
//# sourceMappingURL=validateBody.d.ts.map