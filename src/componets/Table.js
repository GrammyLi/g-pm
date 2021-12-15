/*
 * @Author: grammyli
 * @Date: 2021-10-18 09:51:45
 * @LastEditTime: 2021-12-15 09:39:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /g-design/src/componets/g-Input.js
 */
import "../static/css/Table.css";
import React, { Fragment } from "react";
import {log, } from "../static/js/utils"
class Table extends React.Component {
  render() {
    const { className } = this.props;
    log('className', className)
    return (
      <Fragment>
        <div className="g-table">
          <div className="g-table-container">
            <div className="g-table-content">
              <table>
                <thead className="g-table-thead">
                  <tr>
                    <th className="g-table-cell">name</th>
                    <th className="g-table-cell">start time</th>
                    <th className="g-table-cell">end time</th>
                    <th className="g-table-cell">completed task</th>
                    <th className="g-table-cell">all task</th>
                  </tr>
                </thead>
                <tbody className="g-table-tbody">
                  <tr>
                    <td>
                      <a>name 01</a>
                    </td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Table;
