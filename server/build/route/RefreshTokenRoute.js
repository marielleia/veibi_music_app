"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var RefreshTokenController_1 = __importDefault(require(".././controller/RefreshTokenController"));
/* import dotenv from 'dotenv';

dotenv.config() */
var router = (0, express_1["default"])();
router.post('/refresh', RefreshTokenController_1["default"].login);
exports["default"] = router;
