import React from 'react';
import classes from "./ForecastItem.module.css"
import {getWeatherImage} from "../../getWeatherImage/getWeatherImage";
import {format, fromUnixTime} from "date-fns";

interface ForecastItemProps{
    data: {
        dt: number;
        main:{
            temp: number
        }
    }
}

const ForecastItem: React.FC<ForecastItemProps> = ({data}) => {
    const image = getWeatherImage()
    const day = format(fromUnixTime(data.dt), 'ccc')
    const temp = `${data.main.temp.toFixed()}°C`
    return (
        <div className={classes.item}>
            <div className={classes.item_info}>{day} <br/> {temp}</div>
            <div className={classes.item_image}>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default ForecastItem;