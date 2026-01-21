import ApiError from "core/errors/api.error.ts";
export default (err, req, res, next) => {
    if (err instanceof ApiError) {
        if (err.status > 600 || err.status < 0) {
            return res.status(200).json({ error: { code: err.status, message: err.message } });
        }
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: "Непредвиденная ошибка на сервере!", errors: err });
};
