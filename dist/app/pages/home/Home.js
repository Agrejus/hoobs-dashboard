"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const react_1 = __importStar(require("react"));
const react_responsive_carousel_1 = require("react-responsive-carousel");
require("./Home.scss");
const Weather_1 = require("./sub-components/Weather");
const HoobsAccessories_1 = require("./sub-components/HoobsAccessories");
const HourlyForecast_1 = require("./sub-components/HourlyForecast");
const openweathermap_api_1 = require("../../../data-access-layer/openweathermap-api");
const HoobsDashboard_1 = require("./sub-components/HoobsDashboard");
const Home = () => {
    const [forecast, setForecast] = (0, react_1.useState)(null);
    const interval = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        if (!interval.current) {
            interval.current = setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
                const current = yield (0, openweathermap_api_1.getForecast)();
                setForecast(current);
                console.log('weather');
            }), 300000);
        }
        return () => {
            clearInterval(interval.current);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        const init = () => __awaiter(void 0, void 0, void 0, function* () {
            const current = yield (0, openweathermap_api_1.getForecast)();
            setForecast(current);
            console.log('weather');
        });
        init();
    }, [forecast != null]);
    if (!forecast) {
        return null;
    }
    const renderSlide = (item, options) => {
        if ((options === null || options === void 0 ? void 0 : options.isSelected) === true) {
            return item;
        }
        return null;
    };
    return react_1.default.createElement(react_responsive_carousel_1.Carousel, { autoPlay: false, showArrows: false, showStatus: false, showIndicators: true, renderItem: renderSlide },
        react_1.default.createElement("div", null,
            react_1.default.createElement(Weather_1.Weather, { forecast: forecast })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(HourlyForecast_1.HourlyForecast, { forecast: forecast })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(HoobsAccessories_1.HoobsAccessories, null)),
        react_1.default.createElement("div", null,
            react_1.default.createElement(HoobsDashboard_1.HoobsDashboard, null)));
};
exports.Home = Home;
//# sourceMappingURL=Home.js.map