/*
 * @Author: your name
 * @Date: 2021-11-29 12:48:36
 * @LastEditTime: 2021-11-29 13:01:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/WeatherPage/WeatherPage.js
 */
import React from "react";
import Button from "../../componets/Button";
import Input from "../../componets/Input";

import "./WeatherPage.css";
/** 获取数据的接口 */
// import { fetchWeather } from "../../api/fetchWeather";
import { log } from "../../static/js/utils";

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "Wuhan",
      weather: {},
    };
  }
  searchCity = async () => {
    log("search city", this.state.query);
    // const weather = await fetchWeather(this.state.query);
    // this.setState({
    //   weather,
    // });
  };
  componentDidMount() {
    this.searchCity();
  }
  render() {
    const weather = this.state.weather;
    return (
      <div className="main-container">
        <div className="search-city">
          <Input
            className="search"
            placeholder="Please fill in the city"
            value={this.state.query}
            onChange={(e) =>
              this.setState({
                query: e.target.value,
              })
            }
          />
          <Button
            type="primary"
            className="search-button"
            value="Search"
            onClick={this.searchCity}
          />
        </div>

        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.country}</sup>
            </h2>
            <div className="city-temp">
              {weather.temp}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={weather.icon}
                alt={weather.description}
              />
              <p>{weather.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default WeatherPage;