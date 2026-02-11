const errorMessageList: Record<number, string> = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

class HttpError extends Error {
  public status: number;

  constructor(status: number = 400, message?: string) {
    super(message ?? errorMessageList[status] ?? "Error");
    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export default HttpError;
