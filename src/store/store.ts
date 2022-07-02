import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {CurrentCitySlice} from "./reducers/currentCitySlice";
import {WeatherSlice} from "./reducers/weatherSlice";

export const store = configureStore({
  reducer: {
    currentCity: CurrentCitySlice.reducer,
    weatherNow: WeatherSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
