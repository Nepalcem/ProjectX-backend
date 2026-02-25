import type { Document } from "mongoose";
interface MongooseError extends Error {
    code?: number;
    status?: number;
}
declare const handleMongooseError: <T extends Document>(error: MongooseError, _doc: T, next: (err?: Error) => void) => void;
export default handleMongooseError;
//# sourceMappingURL=handleMongooseError.d.ts.map