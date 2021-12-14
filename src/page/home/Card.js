/*
 * @Author: your name
 * @Date: 2021-12-14 19:08:38
 * @LastEditTime: 2021-12-14 19:10:19
 * @LastEditors: your name
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
          <div className="g-home-card-completed">×</div>
        </div>
      </div>
    );
  }
}
export default Card;
