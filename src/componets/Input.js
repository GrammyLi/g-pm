/*
 * @Author: grammyli
 * @Date: 2021-10-18 09:51:45
 * @LastEditTime: 2021-12-28 20:28:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /g-design/src/componets/g-Input.js
 */
import "../static/css/Input.css";
import React, { Fragment } from "react";
// import {log, } from "../static/js/utils"
class Input extends React.Component {
  render() {
    const { placeholder, value, onChange, className, onInput, disabled } = this.props;
    let name = 'g-input'
    if (className && className.length > 0) {
      name += ` ${className}`
    }
    // log('className', className)
    // log('name', name)
    return (
     <Fragment>
       <input placeholder={placeholder} type="text" className={name} value={value} onChange={onChange} onInput={onInput} disabled={disabled} /> 
     </Fragment>
    )
  }
}
export default Input;

