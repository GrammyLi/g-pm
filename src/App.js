/*
 * @Author: your name
 * @Date: 2020-06-20 16:29:08
 * @LastEditTime: 2021-11-29 12:33:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/App.js
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExamplePage from "./page/ExamplePage/ExamplePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/example" component={ExamplePage} />
      </Router>
    </div>
  );
}

export default App;
