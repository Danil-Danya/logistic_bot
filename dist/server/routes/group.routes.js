"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const group_controller_1 = __importDefault(require("../controllers/group.controller"));
const router = (0, express_1.Router)();
router.get('/groups', group_controller_1.default.getAll);
router.get('/groups/:id', group_controller_1.default.getById);
router.delete('/groups/:id', group_controller_1.default.delete);
router.put('/groups/:id', group_controller_1.default.update);
router.patch('/groups/:id', group_controller_1.default.edit);
exports.default = router;
