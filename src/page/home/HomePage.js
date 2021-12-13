/*
 * @Author: your name
 * @Date: 2021-11-29 18:41:18
 * @LastEditTime: 2021-12-13 19:40:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/home/HomePage.js
 */
import React from "react";
import Button from "../../componets/Button";

import { log } from "../../static/js/utils";
import Input from "../../componets/Input";
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="g-home">
        <div class="g-home-left">
          <Button type="primary" value="任务" className="g-home-left-btn" />
          <Button type="primary" value="项目" className="g-home-left-btn"  />
        </div>
        <div class="g-home-content">
          <div className="g-home-control">
            <Input
              placeholder="Please fill in the city"
              value={this.state.query}
              onChange={(e) =>
                this.setState({
                  query: e.target.value,
                })
              }
            />
            <Button type="primary" value="+ 项目" />
          </div>
        
        </div>
      </div>
    );
  }
}
export default HomePage;
