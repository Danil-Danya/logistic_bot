"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const folder_controller_1 = __importDefault(require("../controllers/folder.controller"));
const router = (0, express_1.Router)();
router.post("/folders", folder_controller_1.default.create);
router.post("/folders/add-group", folder_controller_1.default.update);
router.put("/folders/:id", folder_controller_1.default.update);
router.patch("/folders/:id", folder_controller_1.default.edit);
router.delete("/folders/:id", folder_controller_1.default.delete);
router.get("/folders", folder_controller_1.default.getAll);
router.get("/folders/:id", folder_controller_1.default.getById);
exports.default = router;
