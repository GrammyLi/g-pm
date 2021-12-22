/*
 * @Author: your name
 * @Date: 2021-11-29 18:41:18
 * @LastEditTime: 2021-12-22 19:25:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/home/HomePage.js
 */
import React from "react";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import Table from "../../componets/Table";
import Modal from "../../componets/Modal";

// import Card from "./Card";

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
                viewBox="0 0 48 48"
                width="24"
                height="24"
              >
                <path d="M 24.4375 4.0019531 A 1.50015 1.50015 0 0 0 23 5.5 L 23 15.255859 A 1.50015 1.50015 0 0 0 23 15.736328 L 23 30.279297 C 22.973003 30.25816 22.949133 30.233735 22.921875 30.212891 C 21.091228 28.812983 18.65717 28 16 28 C 13.34283 28 10.908772 28.812983 9.078125 30.212891 C 7.2474778 31.612798 6 33.675029 6 36 C 6 38.324971 7.2474778 40.387202 9.078125 41.787109 C 10.908772 43.187017 13.34283 44 16 44 C 18.65717 44 21.091228 43.187017 22.921875 41.787109 C 24.684898 40.438915 25.894536 38.473774 25.982422 36.253906 A 1.50015 1.50015 0 0 0 25.984375 36.232422 A 1.50015 1.50015 0 0 0 26 36 L 26 17.664062 L 39.972656 22.904297 A 1.50015 1.50015 0 0 0 42 21.5 L 42 14.964844 C 42 12.260179 40.315757 9.8286138 37.783203 8.8789062 L 25.027344 4.0957031 A 1.50015 1.50015 0 0 0 24.4375 4.0019531 z M 26 7.6640625 L 36.728516 11.6875 C 38.099962 12.201792 39 13.499508 39 14.964844 L 39 19.335938 L 26 14.460938 L 26 7.6640625 z M 16 31 C 18.037254 31 19.853864 31.643074 21.099609 32.595703 C 22.345354 33.548333 23 34.735121 23 36 C 23 37.264879 22.345354 38.451667 21.099609 39.404297 C 19.853864 40.356926 18.037254 41 16 41 C 13.962746 41 12.146136 40.356926 10.900391 39.404297 C 9.6546451 38.451667 9 37.264879 9 36 C 9 34.735121 9.6546451 33.548333 10.900391 32.595703 C 12.146136 31.643074 13.962746 31 16 31 z"></path>
              </svg>
              <span>音乐</span>
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
              placeholder="搜索"
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
              <Button
                type="text"
                value="全部"
                className="g-home-status-left g-active"
              />
              <Button type="text" value="代做" className="g-home-status-left" />
              <Button type="text" value="进行" className="g-home-status-left" />
              <Button type="text" value="完成" className="g-home-status-left" />
            </div>
            <div className="g-home-status">
              <div className="g-home-status-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill=""
                    d="M6 22H10V26H6zM6 14H10V18H6zM6 30H10V34H6zM6 6H10V10H6zM6 38H10V42H6z"
                  ></path>
                  <g>
                    <path
                      fill=""
                      d="M14 22H42V26H14zM14 14H42V18H14zM14 30H42V34H14zM14 6H42V10H14zM14 38H42V42H14z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="g-home-status-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  {" "}
                  <path
                    fill="#2196F3"
                    d="M 4 5 C 2.895 5 2 5.895 2 7 L 2 8 L 28 8 L 28 7 C 28 5.895 27.105 5 26 5 L 4 5 z M 2 11 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 11 L 2 11 z M 5 13 L 13 13 L 13 14 L 5 14 L 5 13 z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/* <div className="g-home-card-container">
            {["", "", ""].map((e) => (
              <Card />
            ))}
          </div> */}
          <div className="g-home-list-container">
            <Table className="g-table-list" />
          </div>
       
        </div>
        <Modal className="g-hide" />
      </div>
    );
  }
}
export default HomePage;
