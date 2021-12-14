/*
 * @Author: your name
 * @Date: 2021-12-14 19:48:36
 * @LastEditTime: 2021-12-14 19:55:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/componets/Modal.js
 */
import "../static/css/Modal.css";
import React, { Fragment } from "react";
// import {log, } from "../static/js/utils"
class Modal extends React.Component {
  render() {
    const { placeholder, value, onChange, className } = this.props;
    // log('classNameName', classNameName)
    // log('name', name)

    return (
      <Fragment>
        <div className={`g-modal ${className || ''}`}>
          <div className="g-modal-content">
            <div className="g-title">Add a collection</div>
            <div className="g-input-item">
              <div className="g-input-key">name</div>
              <input className="g-input-value g-input-value-name" placeholder="my collection" />
            </div>
            <div className="g-modal-btns">
              <div className="g-modal-btn g-modal-btn-black">
                cancel
              </div>
              <div className="g-modal-btn g-modal-btn-blue">create</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Modal;
