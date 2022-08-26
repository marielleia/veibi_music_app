"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var App_1 = __importDefault(require("./App"));
var server = http_1["default"].createServer(App_1["default"]);
var PORT = process.env.PORT || 3001;
server.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(PORT));
});
