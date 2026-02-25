const errorMessageList = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
};
class HttpError extends Error {
    constructor(status = 400, message) {
        super(message ?? errorMessageList[status] ?? "Error");
        this.status = status;
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
export default HttpError;
//# sourceMappingURL=httpError.js.map