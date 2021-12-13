/*
 * @Author: your name
 * @Date: 2020-06-20 16:29:08
 * @LastEditTime: 2021-11-29 18:55:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/App.js
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExamplePage from "./page/exam/ExamplePage";
import WeatherPage from "./page/weather/WeatherPage";
import HomePage from "./page/home/HomePage";

 
function App() {

  return (
      <Router>
        <Route path="/example" component={ExamplePage} />
        <Route path="/weather" component={WeatherPage} />
        <Route exact path="/" component={HomePage} />
      </Router>
  );
}

export default App;
