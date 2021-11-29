/*
 * @Author: grammyli
 * @Date: 2021-10-18 09:51:45
 * @LastEditTime: 2021-11-29 12:30:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /g-design/src/componets/g-button.js
 */
import "../static/css/Button.css";
import React from "react";
// import { log } from "../static/js/utils";
class Button extends React.Component {
  render() {
    let { type, value, size, className, onClick, disabled, loading, danger, shape } =
      this.props;
    className = className ? className : "";
    // 按钮的类型
    const classTypes = {
      primary: "g-button-primary",
      dashed: "g-button-dashed",
      text: "g-button-text",
      link: "g-button-link",
    };
    let classType = "";
    if (type && type !== "default") {
      classType = classTypes[type];
    }
    // 按钮的大小
    const classSizes = {
      small: "g-button-small",
      large: "g-button-large",
    };
    let classSize = "";
    if (size && size !== "default") {
      classSize = classSizes[size];
    }
    // 是否是 danger
    danger = danger || false
    let classDanger = ''
    if (danger) {
      classDanger = 'g-button-dangerous'
    }
    // 形状
    const classShapes = {
      circle: 'g-button-circle',
      round: 'g-button-round',
    }
    let classShape = "";
    if (shape && shape !== "default") {
      classShape = classShapes[shape];
    }
    // 合并所有的 className
    const classNames = [classType, classSize, className, classDanger, classShape];
    let name = "g-button";
    classNames.forEach((n) => {
      if (!n && n.length === 0) {
        return;
      }
      name += ` ${n}`;
    });
    disabled = disabled || loading ? true : false;
    // 这里应该继续抽象成组件
    const icon = (
      <span className="g-icon g-icon-spin">
        <svg
          viewBox="0 0 1024 1024"
          focusable="false"
          data-icon="loading"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
        </svg>
      </span>
    );
    // log('className', name)
    return (
      <button className={name} onClick={onClick} disabled={disabled}>
        {value ? value : ""}
        {loading ? icon : ''}
      </button>
    );
  }
}
export default Button;
