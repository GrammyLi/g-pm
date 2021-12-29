/*
 * @Author: your name
 * @Date: 2020-06-20 16:29:08
 * @LastEditTime: 2021-12-29 19:20:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/App.js
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormPage from "./page/form/FormPage";
import BtnPage from "./page/btn/BtnPage";
import WeatherPage from "./page/weather/WeatherPage";
import HomePage from "./page/home/HomePage";

function App() {

  return (
      <Router>
         <Route path="/btn" component={BtnPage} />
        <Route path="/form" component={FormPage} />
        <Route path="/weather" component={WeatherPage} />
        <Route exact path="/" component={HomePage} />
      </Router>
  );
}

export default App;
