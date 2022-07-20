"use strict";
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
exports.getForecast = void 0;
const getForecast = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=44.7512576&lon=-93.4084608&appid=${appSettings.openWeatherApiKey}&units=imperial&exclude=minutely`;
    const response = yield fetch(url, {
        method: "GET"
    });
    return yield response.json();
});
exports.getForecast = getForecast;
//# sourceMappingURL=openweathermap-api.js.map