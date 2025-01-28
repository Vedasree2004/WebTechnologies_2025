app.factory('weatherService', ['$http', function ($http) {
    const API_KEY = '9fe391601bfac3773cff7c687a3163dc'; // Replace with your OpenWeatherMap API key
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    return {
        getWeather: function (city) {
            const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
            return $http.get(url);
        }
    };
}]);
