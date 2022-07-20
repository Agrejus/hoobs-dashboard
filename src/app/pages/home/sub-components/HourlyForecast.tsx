import { Grid } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { Forecast, Hourly } from '../../../../data-access-layer/openweathermap-api.entities';
import { formatDegrees } from '../../../../utilities/utilts';
import './HourlyForecast.scss';

interface HourlyForecastPorps {
    forecast: Forecast;
}

export const HourlyForecast: React.FC<HourlyForecastPorps> = (props) => {
    const { forecast } = props;

    const build = () => {
        const colors = ["rgb(30, 30, 30)", "rgb(40, 40, 40)", "rgb(50, 50, 50)"];
        const dates = [{ date: moment().format("M/D/YYYY"), color: "" }];
        const items: (Hourly & { label?: string, color?: string })[] = [];

        for (let item of forecast.hourly) {
            const date = moment.unix(item.dt);
            const found = dates.find(w => w.date === date.format("M/D/YYYY"));

            if (moment(date).isSame(moment(), "day") === false && dates.some(w => w.date === date.format("M/D/YYYY")) === false) {
                const marker = { date: date.format("M/D/YYYY"), color: colors.pop() ?? "" };
                items.push({ ...item, label: date.format("dddd MMMM D YYYY"), color: marker.color });
                items.push({ ...item, color: marker.color });
                dates.push(marker);
                continue;
            }

            items.push({ ...item, color: found?.color });
        }

        return items;
    }

    return <Grid container spacing={2} padding={2} className="hourly-forecast">
        <Grid item xs={12}>
            <h1>Hourly Forecast</h1>
            {build().map(w => {

                const color = w.color ?? "inherit";

                if (w.label) {
                    return <div className='hourly-forecast-item hourly-forecast-item-label' style={{ backgroundColor: color }}>
                        <div className='label'>{w.label}</div>
                        <div className='hourly-forecast-time'>{moment.unix(w.dt).format("h:mm A")}</div>
                        <img className='hourly-forecast-icon' src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} />
                        <div className='hourly-forecast-temperature'>{formatDegrees(w.temp)}</div>
                    </div>
                }

                return <div className='hourly-forecast-item' style={{ backgroundColor: color }}>
                    <div className='hourly-forecast-time'>{moment.unix(w.dt).format("h:mm A")}</div>
                    <img className='hourly-forecast-icon' src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} />
                    <div className='hourly-forecast-temperature'>{formatDegrees(w.temp)}</div>
                </div>
            })}
        </Grid>
    </Grid>
}