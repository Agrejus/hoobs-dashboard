/// <reference path="../common-types.d.ts"/>
import { Forecast } from "./openweathermap-api.entities";

export const getForecast = async () => {

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=44.7512576&lon=-93.4084608&appid=${appSettings.openWeatherApiKey}&units=imperial&exclude=minutely`;

    const response = await fetch(url, {
        method: "GET"
    });

    return await response.json() as Forecast
}
