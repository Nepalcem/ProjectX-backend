const handleMongooseError = (error, _doc, next) => {
    if (!error)
        return next();
    const { name, code } = error;
    error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
    next(error);
};
export default handleMongooseError;
//# sourceMappingURL=handleMongooseError.js.map