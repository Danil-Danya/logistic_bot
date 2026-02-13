"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cities_controller_1 = __importDefault(require("server/controllers/cities.controller"));
const router = (0, express_1.Router)();
router.post('/cities', cities_controller_1.default.create);
router.put('/cities/:id', cities_controller_1.default.update);
router.patch('/cities/:id', cities_controller_1.default.edit);
router.get('/cities', cities_controller_1.default.getAll);
router.get('/cities/:id', cities_controller_1.default.getById);
router.delete('/cities/:id', cities_controller_1.default.delete);
exports.default = router;
