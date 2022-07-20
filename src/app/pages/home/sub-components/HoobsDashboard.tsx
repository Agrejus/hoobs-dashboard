import React from 'react';
import './HoobsDashboard.scss';

interface HoobsDashboardProps {

}

export const HoobsDashboard: React.FC<HoobsDashboardProps> = () => {
    return <iframe className='hoobs-dashboard' src="http://192.168.1.191:9090/"></iframe>
}