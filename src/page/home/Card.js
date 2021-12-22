/*
 * @Author: your name
 * @Date: 2021-12-14 19:08:38
 * @LastEditTime: 2021-12-22 18:32:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/home/Card.js
 */
import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="g-home-card">
        <div className="g-home-card-name">collection name</div>
        <div className="g-home-card-time">10 days ago</div>
        <div className="g-home-schedule">
          <div className="g-home-card-count">10 / 20 task</div>
          <div className="g-home-card-completed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                fill="#4caf50"
                d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
              ></path>
              <path
                fill="#c8e6c9"
                d="M33,24c0,4.972-4.028,9-9,9s-9-4.028-9-9s4.028-9,9-9S33,19.028,33,24z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
