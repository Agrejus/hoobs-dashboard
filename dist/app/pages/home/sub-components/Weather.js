"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const react_1 = __importDefault(require("react"));
require("./Weather.scss");
const utilts_1 = require("../../../../utilities/utilts");
const lodash_1 = require("lodash");
const moment_1 = __importDefault(require("moment"));
const Weather = (props) => {
    var _a, _b;
    const { forecast } = props;
    const maxUvi = (_a = (0, lodash_1.max)(forecast.hourly.filter(w => moment_1.default.unix(w.dt).isSame((0, moment_1.default)(), "day")).map(w => w.uvi))) !== null && _a !== void 0 ? _a : 0;
    const today = forecast.daily.find(w => moment_1.default.unix(w.dt).isSame((0, moment_1.default)(), "day") === true);
    const hourlyTemps = forecast.hourly.filter(w => moment_1.default.unix(w.dt).isSame((0, moment_1.default)(), "day")).map(w => w.temp);
    const high = hourlyTemps.every(w => w < today.temp.max) ? "--" : (0, utilts_1.formatDegrees)(today.temp.max);
    return react_1.default.createElement(Grid_1.default, { container: true, spacing: 2, padding: 2, className: "weather" },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Grid_1.default, { container: true, className: "current-forecast" },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 2 },
                    react_1.default.createElement("div", { className: 'current-forecast-icon-container' },
                        react_1.default.createElement("img", { className: 'current-forecast-icon', src: `http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png` }))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 5 },
                    react_1.default.createElement("div", { className: 'font-fit text-center' }, (0, utilts_1.formatDegrees)(forecast.current.temp)),
                    react_1.default.createElement("div", { className: 'text-center current-description-container decorator-font-size-2x' },
                        react_1.default.createElement("div", { className: 'current-description' }, forecast.current.weather[0].description),
                        react_1.default.createElement("div", { className: 'text-center decorator-font-size-1x' },
                            high,
                            "/",
                            (0, utilts_1.formatDegrees)(today.temp.min)))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 4, className: "current-conditions" },
                    react_1.default.createElement("div", { className: 'current-date' }, (0, moment_1.default)().format("dddd MMMM D YYYY")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("i", { className: "fa-solid fa-temperature-empty" }),
                        "\u2003\u2003Feels Like ",
                        (0, utilts_1.formatDegrees)(forecast.current.feels_like)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("i", { className: "fa-solid fa-droplet" }),
                        "\u2003\u2003Humitidy ",
                        (0, utilts_1.formatPercent)(forecast.current.humidity)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("i", { className: "fa-solid fa-wind" }),
                        "\u2003\u2003Wind ",
                        (0, utilts_1.formatNumber)(forecast.current.wind_speed, "mph")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("i", { className: "fa-solid fa-temperature-low" }),
                        "\u2003\u2003Dew Point ",
                        (0, utilts_1.formatDegrees)(forecast.current.dew_point)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("i", { className: "fa-solid fa-eye" }),
                        "\u2003\u2003Visibility ",
                        (0, utilts_1.formatNumber)(forecast.current.visibility / 1000, "mi")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("i", { className: "fa-solid fa-sun" }),
                        "\u2003\u2003UV Index ",
                        (0, utilts_1.formatNumber)(forecast.current.uvi),
                        "/",
                        (0, utilts_1.formatNumber)(maxUvi)),
                    !!((_b = forecast.alerts) === null || _b === void 0 ? void 0 : _b.length) && react_1.default.createElement("div", { className: 'weather-advisory' }, forecast.alerts.map(w => react_1.default.createElement("div", { key: (0, lodash_1.uniqueId)() },
                        react_1.default.createElement("i", { className: "fa-solid fa-triangle-exclamation" }),
                        "\u2003\u2003",
                        w.event,
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("small", null, w.description))))))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 }, forecast.daily.filter(w => moment_1.default.unix(w.dt).isSame((0, moment_1.default)(), "day") === false).map(w => {
            return react_1.default.createElement("div", { key: (0, lodash_1.uniqueId)(), className: 'daily-forecast' },
                react_1.default.createElement("div", { className: 'daily-forecast-title' }, moment_1.default.unix(w.dt).format("dddd")),
                react_1.default.createElement("img", { className: 'daily-forecast-icon', src: `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png` }),
                react_1.default.createElement("div", { className: 'daily-forecast-description' }, w.weather[0].description),
                react_1.default.createElement("div", { className: 'daily-forecast-temperature' },
                    (0, utilts_1.formatDegrees)(w.temp.max),
                    "/",
                    (0, utilts_1.formatDegrees)(w.temp.min)));
        })));
};
exports.Weather = Weather;
//# sourceMappingURL=Weather.js.map