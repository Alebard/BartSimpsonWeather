import {IWeather, IWeatherData} from "../../types/IWeather";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchWeather} from "./ActionCreator";

const initialState: IWeather = {
    weatherData: {
        city:{
            name: '',
        },
        list: [],
    },
    requestCompleted: false,
    isLoading: false,
    error: null,
}


export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchWeather.fulfilled.type]: (state, action: PayloadAction<IWeatherData>) => {
            state.isLoading = false;
            state.error = null;
            state.weatherData = action.payload;
            state.requestCompleted = true
        },
        [fetchWeather.rejected.type]: (state, action: PayloadAction<number>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
    }
})