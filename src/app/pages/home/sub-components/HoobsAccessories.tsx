import React from 'react';
import './HoobsAccessories.scss'

interface HoobsAccessoriesProps {

}

export const HoobsAccessories: React.FC<HoobsAccessoriesProps> = () => {
    return <iframe className='hoobs-accessories' src="http://192.168.1.191:9090/accessories/default"></iframe>
}