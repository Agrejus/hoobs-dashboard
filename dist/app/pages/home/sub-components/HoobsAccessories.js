"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoobsAccessories = void 0;
const react_1 = __importDefault(require("react"));
require("./HoobsAccessories.scss");
const HoobsAccessories = () => {
    return react_1.default.createElement("iframe", { className: 'hoobs-accessories', src: "http://192.168.1.191:9090/accessories/default" });
};
exports.HoobsAccessories = HoobsAccessories;
//# sourceMappingURL=HoobsAccessories.js.map