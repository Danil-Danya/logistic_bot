class ApiError extends Error {
    public status: number;
    public errors: unknown[];

    constructor (status: number, message: string, errors: unknown[] = []) {
        super(message);

        this.status = status;
        this.errors = errors;

        Object.setPrototypeOf(this, ApiError.prototype);
    }

    static BadRequest (message: string, errors: unknown[] = []) {
        return new ApiError(400, message, errors);
    }

    static NotFound (message: string, errors: unknown[] = []) {
        return new ApiError(404, message, errors);
    }

    static UnknownError (message: string, errors: unknown[] = []) {
        return new ApiError(500, message, errors);
    }

    static UnauthorizedError (errors: unknown[] = []) {
        return new ApiError(401, "Пользователь не был авторизован!", errors);
    }

    static ForBidden (errors: unknown[] = []) {
        return new ApiError(403, "У данного пользователя не достаточно прав доступа!", errors);
    }

    static ServerError (errors: unknown[] = []) {
        return new ApiError(500, "Сервер упал, пожалуйста, перезапустите сервер", errors);
    }
}

export default ApiError;
