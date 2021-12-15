/*
 * @Author: your name
 * @Date: 2021-11-29 18:41:18
 * @LastEditTime: 2021-12-15 09:53:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/home/HomePage.js
 */
import React from "react";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
// import Table from "../../componets/Table";
import Modal from "../../componets/Modal";

import Card from "./Card";

// import { log } from "../../static/js/utils";

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
          {/* <Button type="primary" value="task" className="g-home-left-btn" />
          <Button type="primary" value="collections" className="g-home-left-btn" /> */}
          <ul class="g-home-left-action-list">
            <li className="g-home-left-action-item active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="feather feather-calendar"
                viewBox="0 0 24 24"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <path d="M16 2v4M8 2v4m-5 4h18"></path>
              </svg>
              <span>项目</span>
            </li>
            <li className="g-home-left-action-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-hash"
              >
                <line x1="4" y1="9" x2="20" y2="9"></line>
                <line x1="4" y1="15" x2="20" y2="15"></line>
                <line x1="10" y1="3" x2="8" y2="21"></line>
                <line x1="16" y1="3" x2="14" y2="21"></line>
              </svg>
              <span>任务</span>
            </li>
            <li className="g-home-left-action-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>收藏</span>
            </li>
          </ul>
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
              <Button type="text" value="全部" />
              <Button type="text" value="代做" />
              <Button type="text" value="进行" />
              <Button type="text" value="完成" />
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
          {/* <div className="g-home-list-container">
            <Table className="g-table-list" />
          </div> */}
        </div>
        <Modal className="g-hide" />
      </div>
    );
  }
}
export default HomePage;
