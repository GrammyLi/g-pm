/*
 * @Author: your name
 * @Date: 2021-11-29 12:52:19
 * @LastEditTime: 2021-11-29 13:01:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/api/fetchWeather.js
 */
// import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

const dealWeather = data => {
    const {
        main,
        name,
    } = data
    const country = data.sys.country
    const temp = main ? Math.round(data.main.temp) : 0
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const description = data.weather[0].description
    return {
        icon,
        temp,
        main,
        name,
        country,
        description,
    }
}

// export const fetchWeather = async (query) => {
//     const { data } = await axios.get(URL, {
//         params: {
//             q: query,
//             units: 'metric',
//             APPID: API_KEY,
//         }
//     });

//     return dealWeather(data);
// }