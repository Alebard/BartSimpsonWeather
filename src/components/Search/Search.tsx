import React, {useRef} from 'react';
import {useAppDispatch} from "../../hooks/hooks";
import {AppDispatch} from "../../store/store";
import {CurrentCitySlice} from "../../store/reducers/currentCitySlice";
import classes from "./Search.module.css"

function submitHandler(city: any) {
    return (dispatch: AppDispatch) => {
        const {changeCurrentCity} = CurrentCitySlice.actions;
        dispatch(changeCurrentCity(city))
    }
}

interface SearchProps {
    setStartWeather: any
}

const Search:React.FC<SearchProps> = ({setStartWeather}) => {
    const dispatch = useAppDispatch()
    const cityInput = useRef<HTMLInputElement>(null);

    return (
        <form action=""
              onSubmit={(event) => {
                  event.preventDefault()
                  dispatch(submitHandler(cityInput.current?.value))
                  setStartWeather(true)
              }}>
            <input className={classes.input} ref={cityInput} type="text" placeholder={'...search city'}/>
        </form>
    );
};

export default Search;