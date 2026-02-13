import ApiError from "../../core/errors/api.error"
;
import { NextFunction, Request, Response } from "express";

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        if (err.status > 600 || err.status < 0) {
            return res.status(200).json({ error: { code: err.status, message: err.message } });
        }

        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }

    //console.log(err);
    return res.status(500).json({ message: "Непредвиденная ошибка на сервере!", errors: err });
}