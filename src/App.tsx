import React, {useEffect, useState,} from 'react';
import classes from "./App.module.css";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {fetchWeather} from "./store/reducers/ActionCreator";
import Search from "./components/Search/Search";
import Logo from "./components/Logo/Logo";
import WeatherNow from "./components/WeatherNow/WeatherNow";
import BartSay from "./components/BartSay/BartSay";
import Forecast from "./components/Forecast/Forecast";

function App() {
    const [startWeather, setStartWeather] = useState(false)
    const currentCity = useAppSelector(state => state.currentCity)
    const {error, requestCompleted} = useAppSelector(state => state.weatherNow)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (startWeather) dispatch(fetchWeather(currentCity))
    }, [currentCity])
    return (
        <div className={classes.wrapper}>
            <Logo/>
            <Search setStartWeather={setStartWeather}/>
            { requestCompleted
                    ? <>
                        <WeatherNow/>
                        <Forecast/>
                    </>
                    : <BartSay error={error}/>
            }
        </div>
    );
}

export default App;
