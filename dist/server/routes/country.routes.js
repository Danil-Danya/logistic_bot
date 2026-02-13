"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countries_controller_1 = __importDefault(require("server/controllers/countries.controller"));
const router = (0, express_1.Router)();
router.post('/countries', countries_controller_1.default.create);
router.put('/countries/:id', countries_controller_1.default.update);
router.patch('/countries/:id', countries_controller_1.default.edit);
router.get('/countries', countries_controller_1.default.getAll);
router.get('/countries/:id', countries_controller_1.default.getById);
router.delete('/countries/:id', countries_controller_1.default.delete);
exports.default = router;
