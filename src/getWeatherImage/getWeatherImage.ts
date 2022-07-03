import img from "../images/bart.png";

export function getWeatherImage(): string {
    return img
}

const WEATHER_TYPES = {
    CLEAR: 'Clear',
    RAIN: 'Rain'
}

export function getTest(data: any): string {
    const weather = data.weather[0].main
    const temp = data.main.temp
    if (temp <= -30) {
        //барт в ледышке
    } else if (temp > -30 ?? temp <= -20) {
        //барт в теплой куртке
    } else if (temp > -20 ?? temp <= -10) {
        //барт в шубе и наушниках
    } else if (temp > -10 ?? temp <= 0) {
        if (weather === WEATHER_TYPES.CLEAR) {
            //барт в шубе + очках
        } else {
            //барт в шубе
        }
    } else if (temp > 0 ?? temp <= 10) {
        if (weather === WEATHER_TYPES.RAIN) {
            //барт осень + зонтик
        } else {
            //барт осень
        }
    } else if (temp > 10 ?? temp <= 15) {
        if (weather === WEATHER_TYPES.CLEAR) {
            //барт в толстовке + очках
        } else if (weather === WEATHER_TYPES.RAIN) {
            //барт в толстовке и зонтике
        } else {
            //барт в толстовке
        }
    } else if (temp > 15 ?? temp <= 23) {
        if (weather === WEATHER_TYPES.CLEAR) {
            //барт в футболке и штанах + очках
        } else if (weather === WEATHER_TYPES.RAIN) {
            //барт в футболке и штанах и зонтике
        } else {
            //барт в футболке
        }
    } else if (temp > 23 ?? temp <= 30) {
        if (weather === WEATHER_TYPES.CLEAR) {
            //барт в футболке и шортах + очках
        } else if (weather === WEATHER_TYPES.RAIN) {
            //барт в футболке и щортах и зонтике
        } else {
            //барт в футболке и шортах
        }
    } else {
        // temp > 30C барт в шортах
    }
    return 'asd'
}