"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatImperialAndDegrees = exports.formatNumber = exports.formatPercent = exports.formatDegrees = void 0;
const react_1 = __importDefault(require("react"));
const formatDegrees = (value) => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        Math.round(value),
        "\u00B0");
};
exports.formatDegrees = formatDegrees;
const formatPercent = (value) => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        Math.round(value),
        "%");
};
exports.formatPercent = formatPercent;
const formatNumber = (value, symbol = "") => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        Math.round(value),
        symbol);
};
exports.formatNumber = formatNumber;
const formatImperialAndDegrees = (celcius) => {
    const value = (celcius * 9 / 5) + 32;
    return (0, exports.formatDegrees)(value);
};
exports.formatImperialAndDegrees = formatImperialAndDegrees;
//# sourceMappingURL=utilts.js.map