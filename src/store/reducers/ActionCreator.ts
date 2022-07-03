import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getUrl} from "../../urls/urls";
import {IWeather} from "../../types/IWeather";

export const fetchWeather = createAsyncThunk(
    'weather/fetch',
    async(str:string,  thunkApi) => {
        try{
            const response = await axios.get<IWeather>(getUrl('forecast', str ))
            return response.data
        }catch (e: any) {
            return thunkApi.rejectWithValue(e.response.status)
        }
    }
)

