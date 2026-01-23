"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const group_routes_1 = __importDefault(require("./group.routes"));
const folder_routes_1 = __importDefault(require("./folder.routes"));
const router = (0, express_1.Router)();
router.use(group_routes_1.default);
router.use(folder_routes_1.default);
exports.default = router;
