import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Home.scss';
import { Weather } from './sub-components/Weather';
import { HoobsAccessories } from './sub-components/HoobsAccessories';
import { HourlyForecast } from './sub-components/HourlyForecast';
import { getForecast } from '../../../data-access-layer/openweathermap-api';
import { Forecast } from '../../../data-access-layer/openweathermap-api.entities';
import { HoobsDashboard } from './sub-components/HoobsDashboard';

interface HomeProps {

}

export const Home: React.FunctionComponent<HomeProps> = () => {

    const [forecast, setForecast] = useState<Forecast | null>(null);
    const interval = useRef<number>()

    useEffect(() => {

        if (!interval.current) {
            interval.current = setInterval(async () => {
                const current = await getForecast()

                setForecast(current);
                console.log('weather')
            }, 300000) as any;
        }

        return () => {
            clearInterval(interval.current)
        }
    }, []);

    useEffect(() => {

        const init = async () => {
            const current = await getForecast()

            setForecast(current);
            console.log('weather')
        }

        init();
    }, [forecast != null]);

    if (!forecast) {
        return null;
    }

    const renderSlide = (item: React.ReactNode, options?: { isSelected: boolean; isPrevious: boolean; } | undefined) => {

        if (options?.isSelected === true) {
            return item
        }

        return null;
    }

    return <Carousel autoPlay={false} showArrows={false} showStatus={false} showIndicators={true} renderItem={renderSlide}>
        <div>
            <Weather forecast={forecast} />
        </div>
        <div>
            <HourlyForecast forecast={forecast} />
        </div>
        <div>
            <HoobsAccessories />
        </div>
        <div>
            <HoobsDashboard />
        </div>
    </Carousel>
}