"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoobsDashboard = void 0;
const react_1 = __importDefault(require("react"));
require("./HoobsDashboard.scss");
const HoobsDashboard = () => {
    return react_1.default.createElement("iframe", { className: 'hoobs-dashboard', src: "http://192.168.1.191:9090/" });
};
exports.HoobsDashboard = HoobsDashboard;
//# sourceMappingURL=HoobsDashboard.js.map