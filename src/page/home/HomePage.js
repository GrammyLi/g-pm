/*
 * @Author: your name
 * @Date: 2021-11-29 18:41:18
 * @LastEditTime: 2021-12-14 19:39:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/home/HomePage.js
 */
import React from "react";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import Table from "../../componets/Table";
import Card from "./Card";
import { log } from "../../static/js/utils";

import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="g-home">
        <div class="g-home-left">
          <Button type="primary" value="任务" className="g-home-left-btn" />
          <Button type="primary" value="项目" className="g-home-left-btn" />
        </div>
        <div class="g-home-content">
          <div className="g-home-control">
            <Input
              placeholder="Search collection"
              value={this.state.query}
              onChange={(e) =>
                this.setState({
                  query: e.target.value,
                })
              }
            />
            <Button type="primary" value="+ 项目" />
          </div>
          <div className="g-home-status-container">
            <div className="g-home-status">
              <Button type="primary" value="全部" />
              <Button type="primary" value="代做" />
              <Button type="primary" value="进行" />
              <Button type="primary" value="完成" />
            </div>
            <div className="g-home-status">
              <Button type="primary" value="列表" />
              <Button type="primary" value="卡片" />
            </div>
          </div>
          <div className="g-home-card-container">
            {["", "", ""].map((e) => (
              <Card />
            ))}
          </div>
          <div className="g-home-list-container">
              <Table />
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
