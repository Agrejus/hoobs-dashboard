"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyForecast = void 0;
const material_1 = require("@mui/material");
const moment_1 = __importDefault(require("moment"));
const react_1 = __importDefault(require("react"));
const utilts_1 = require("../../../../utilities/utilts");
require("./HourlyForecast.scss");
const HourlyForecast = (props) => {
    const { forecast } = props;
    const build = () => {
        var _a;
        const colors = ["rgb(30, 30, 30)", "rgb(40, 40, 40)", "rgb(50, 50, 50)"];
        const dates = [{ date: (0, moment_1.default)().format("M/D/YYYY"), color: "" }];
        const items = [];
        for (let item of forecast.hourly) {
            const date = moment_1.default.unix(item.dt);
            const found = dates.find(w => w.date === date.format("M/D/YYYY"));
            if ((0, moment_1.default)(date).isSame((0, moment_1.default)(), "day") === false && dates.some(w => w.date === date.format("M/D/YYYY")) === false) {
                const marker = { date: date.format("M/D/YYYY"), color: (_a = colors.pop()) !== null && _a !== void 0 ? _a : "" };
                items.push(Object.assign(Object.assign({}, item), { label: date.format("dddd MMMM D YYYY"), color: marker.color }));
                items.push(Object.assign(Object.assign({}, item), { color: marker.color }));
                dates.push(marker);
                continue;
            }
            items.push(Object.assign(Object.assign({}, item), { color: found === null || found === void 0 ? void 0 : found.color }));
        }
        return items;
    };
    return react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, padding: 2, className: "hourly-forecast" },
        react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
            react_1.default.createElement("h1", null, "Hourly Forecast"),
            build().map(w => {
                var _a;
                const color = (_a = w.color) !== null && _a !== void 0 ? _a : "inherit";
                if (w.label) {
                    return react_1.default.createElement("div", { className: 'hourly-forecast-item hourly-forecast-item-label', style: { backgroundColor: color } },
                        react_1.default.createElement("div", { className: 'label' }, w.label),
                        react_1.default.createElement("div", { className: 'hourly-forecast-time' }, moment_1.default.unix(w.dt).format("h:mm A")),
                        react_1.default.createElement("img", { className: 'hourly-forecast-icon', src: `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png` }),
                        react_1.default.createElement("div", { className: 'hourly-forecast-temperature' }, (0, utilts_1.formatDegrees)(w.temp)));
                }
                return react_1.default.createElement("div", { className: 'hourly-forecast-item', style: { backgroundColor: color } },
                    react_1.default.createElement("div", { className: 'hourly-forecast-time' }, moment_1.default.unix(w.dt).format("h:mm A")),
                    react_1.default.createElement("img", { className: 'hourly-forecast-icon', src: `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png` }),
                    react_1.default.createElement("div", { className: 'hourly-forecast-temperature' }, (0, utilts_1.formatDegrees)(w.temp)));
            })));
};
exports.HourlyForecast = HourlyForecast;
//# sourceMappingURL=HourlyForecast.js.map