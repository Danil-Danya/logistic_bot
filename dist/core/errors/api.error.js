class ApiError extends Error {
    status;
    errors;
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
    static NotFound(message, errors = []) {
        return new ApiError(404, message, errors);
    }
    static UnknownError(message, errors = []) {
        return new ApiError(500, message, errors);
    }
    static UnauthorizedError(errors = []) {
        return new ApiError(401, "Пользователь не был авторизован!", errors);
    }
    static ForBidden(errors = []) {
        return new ApiError(403, "У данного пользователя не достаточно прав доступа!", errors);
    }
    static ServerError(errors = []) {
        return new ApiError(500, "Сервер упал, пожалуйста, перезапустите сервер", errors);
    }
}
export default ApiError;
