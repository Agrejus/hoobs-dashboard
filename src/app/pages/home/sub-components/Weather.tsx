import Grid from '@mui/material/Grid';
import React from 'react';
import { Forecast } from '../../../../data-access-layer/openweathermap-api.entities';
import './Weather.scss';
import { formatDegrees, formatNumber, formatPercent } from '../../../../utilities/utilts';
import { max, maxBy, uniqueId } from 'lodash';
import moment from 'moment';

interface WeatherProps {
    forecast: Forecast;
}

export const Weather: React.FunctionComponent<WeatherProps> = (props) => {

    const { forecast } = props;

    const maxUvi = max(forecast.hourly.filter(w => moment.unix(w.dt).isSame(moment(), "day")).map(w => w.uvi)) ?? 0;
    const today = forecast.daily.find(w => moment.unix(w.dt).isSame(moment(), "day") === true)!;
    const hourlyTemps = forecast.hourly.filter(w => moment.unix(w.dt).isSame(moment(), "day")).map(w => w.temp);
    const high = hourlyTemps.every(w => w < today.temp.max) ? "--" : formatDegrees(today.temp.max)

    return <Grid container spacing={2} padding={2} className="weather">
        <Grid item xs={12}>
            <Grid container className="current-forecast">
                <Grid item xs={2}>
                    <div className='current-forecast-icon-container'>
                        <img className='current-forecast-icon' src={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`} />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className='font-fit text-center'>
                        {formatDegrees(forecast.current.temp)}
                    </div>
                    <div className='text-center current-description-container decorator-font-size-2x'>
                        <div className='current-description'>{forecast.current.weather[0].description}</div>
                        <div className='text-center decorator-font-size-1x'>{high}/{formatDegrees(today.temp.min)}</div>
                    </div>
                </Grid>
                <Grid item xs={4} className="current-conditions">
                    <div className='current-date'>{moment().format("dddd MMMM D YYYY")}</div>
                    <div><i className="fa-solid fa-temperature-empty"></i>&emsp;&emsp;Feels Like {formatDegrees(forecast.current.feels_like)}</div>
                    <div><i className="fa-solid fa-droplet"></i>&emsp;&emsp;Humitidy {formatPercent(forecast.current.humidity)}</div>
                    <div><i className="fa-solid fa-wind"></i>&emsp;&emsp;Wind {formatNumber(forecast.current.wind_speed, "mph")}</div>
                    <div><i className="fa-solid fa-temperature-low"></i>&emsp;&emsp;Dew Point {formatDegrees(forecast.current.dew_point)}</div>
                    <div><i className="fa-solid fa-eye"></i>&emsp;&emsp;Visibility {formatNumber(forecast.current.visibility / 1000, "mi")}</div>
                    <div><i className="fa-solid fa-sun"></i>&emsp;&emsp;UV Index {formatNumber(forecast.current.uvi)}/{formatNumber(maxUvi)}</div>
                    {!!forecast.alerts?.length && <div className='weather-advisory'>
                        {forecast.alerts.map(w => <div key={uniqueId()}><i className="fa-solid fa-triangle-exclamation"></i>&emsp;&emsp;{w.event}<br /><small>{w.description}</small></div>)}
                    </div>}
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            {forecast.daily.filter(w => moment.unix(w.dt).isSame(moment(), "day") === false).map(w => {

                return <div key={uniqueId()} className='daily-forecast'>
                    <div className='daily-forecast-title'>{moment.unix(w.dt).format("dddd")}</div>
                    <img className='daily-forecast-icon' src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} />
                    <div className='daily-forecast-description'>{w.weather[0].description}</div>
                    <div className='daily-forecast-temperature'>{formatDegrees(w.temp.max)}/{formatDegrees(w.temp.min)}</div>
                </div>
            })}
        </Grid>
    </Grid>
}