import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: string = '';

export const CurrentCitySlice = createSlice({
    name: 'currentCity',
    initialState,
    reducers: {
        changeCurrentCity(state, action: PayloadAction<string>){
            return action.payload
        }
    }
})

