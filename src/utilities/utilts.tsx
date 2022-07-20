import React from 'react';

export const formatDegrees = (value: number) => {
    return <>{Math.round(value)}&#176;</>
}

export const formatPercent = (value: number) => {
    return <>{Math.round(value)}%</>
}

export const formatNumber = (value: number, symbol: string = "") => {
    return <>{Math.round(value)}{symbol}</>
}

export const formatImperialAndDegrees = (celcius: number) => {
    const value = (celcius * 9 / 5) + 32;
    return formatDegrees(value)
}