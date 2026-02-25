const ctrlWrapper = (ctrl) => {
    return async (req, res, next) => {
        try {
            await Promise.resolve(ctrl(req, res, next));
        }
        catch (error) {
            next(error);
        }
    };
};
export default ctrlWrapper;
//# sourceMappingURL=ctrlWrapper.js.map