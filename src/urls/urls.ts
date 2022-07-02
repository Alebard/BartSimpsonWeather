const serverUrl: string = 'https://api.openweathermap.org/data/2.5/';
const apiKey: string = '4cde9ea698316f3b8e816f377ad1723e';

export function getUrl(type: string, cityName: string) {
    return `${serverUrl}${type}?q=${cityName}&appid=${apiKey}&units=metric`
}

