import React from 'react';
import classes from "./WetherNow.module.css"
import {useAppSelector} from "../../hooks/hooks";
import {fromUnixTime, format} from 'date-fns'
import {getWeatherImage} from "../../getWeatherImage/getWeatherImage";


export function getDay(dt: number): string {
    return format(fromUnixTime(dt), 'ccc, do LLLL')
}

const WeatherNow = () => {
    const name = useAppSelector(state => state.weatherNow.weatherData.city.name)
    const weatherData = useAppSelector(state => state.weatherNow.weatherData.list[0])
    const main = weatherData.weather[0].main
    const temperature = `${weatherData.main.temp.toFixed()}°C`
    const day = getDay(weatherData.dt)
    const weatherImage = getWeatherImage()

    return (
        <div className={classes.weather_now}>
            <div className={classes.weather_now__data}>
                <div className={classes.city}>{name}</div>
                <div className={classes.weather_status}>{main}</div>
                <div className={classes.temp}>{temperature}</div>
                <div className={classes.day}>{day}</div>
            </div>
            <div className={classes.weather_image}>
                <img src={weatherImage} alt=""/>
            </div>
        </div>
    );
};

export default WeatherNow;