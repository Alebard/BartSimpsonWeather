import React from 'react';
import {useAppSelector} from "../../hooks/hooks";
import ForecastItem from "../ForecastItem/ForecastItem";
import classes from "./Forecast.module.css"

const forecastsIndex = [7,15,23,31,39]

const Forecast = () => {
    const weatherData = (useAppSelector(state => state.weatherNow.weatherData.list))


    return (
        <div className={classes.forecast}>
            {forecastsIndex.map((index) => <ForecastItem data={weatherData[index]} key={index} />)}
        </div>
    );
};

export default Forecast;