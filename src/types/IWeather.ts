export interface IWeather {
    weatherData: IWeatherData;
    requestCompleted: boolean;
    isLoading: boolean;
    error: string;
}

interface IWeatherListItem {
    dt: any;
    weather: [
        {
            id: number;
            main: string;
            icon: string;
        }
    ];
    main: {
        temp: number;
        feels_like: number;
    };
}

export interface IWeatherData {
    city:{
        name: string;
    };
    list: IWeatherListItem[]
}