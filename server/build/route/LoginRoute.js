"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var LoginController_1 = __importDefault(require(".././controller/LoginController"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var router = (0, express_1["default"])();
router.post('/login', LoginController_1["default"].login);
exports["default"] = router;
