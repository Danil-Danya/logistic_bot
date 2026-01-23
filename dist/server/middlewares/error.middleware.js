"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = __importDefault(require("../../core/errors/api.error"));
exports.default = (err, req, res, next) => {
    if (err instanceof api_error_1.default) {
        if (err.status > 600 || err.status < 0) {
            return res.status(200).json({ error: { code: err.status, message: err.message } });
        }
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: "Непредвиденная ошибка на сервере!", errors: err });
};
