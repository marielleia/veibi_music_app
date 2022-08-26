"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var LyricsController_1 = __importDefault(require("../controller/LyricsController"));
var router = (0, express_1["default"])();
router.get("/lyrics", LyricsController_1["default"].getLyrics);
exports["default"] = router;
