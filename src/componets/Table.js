/*
 * @Author: grammyli
 * @Date: 2021-10-18 09:51:45
 * @LastEditTime: 2021-12-22 19:38:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /g-design/src/componets/g-Input.js
 */
import "../static/css/Table.css";
import React, { Fragment } from "react";
import { log } from "../static/js/utils";
class Table extends React.Component {
  render() {
    const { className } = this.props;
    log("className", className);
    return (
      <Fragment>
        <div className="g-table">
          <div className="g-table-container">
            <div className="g-table-content">
              <table>
                <thead className="g-table-thead">
                  <tr>
                    <th className="g-table-cell">项目名称</th>
                    <th className="g-table-cell">创建时间</th>
                    <th className="g-table-cell">任务</th>
                    <th className="g-table-cell">结果</th>
                  </tr>
                </thead>
                <tbody className="g-table-tbody">
                  <tr>
                    <td>
                      <div className="grammy">name 01</div>
                    </td>
                    <td>11</td>
                    <td>11</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#4caf50"
                          d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                        ></path>
                        <path
                          fill="#ccff90"
                          d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
                        ></path>
                      </svg>

                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#1890ff"
                          fill-rule="evenodd"
                          d="M12,0.5c-6.35127,0 -11.5,5.14873 -11.5,11.5c0,6.3513 5.14873,11.5 11.5,11.5c6.3513,0 11.5,-5.1487 11.5,-11.5c0,-6.35127 -5.1487,-11.5 -11.5,-11.5Zm0,9.32494l-4.68042,-4.68043c1.3324,-0.91155 2.94362,-1.44451 4.68042,-1.44451c1.7368,0 3.348,0.53296 4.6804,1.44451l-4.6804,4.68043Zm6.8555,6.85546l-4.6804,-4.6804l4.6804,-4.68042c0.9115,1.33241 1.4445,2.94362 1.4445,4.68042c0,1.7368 -0.533,3.348 -1.4445,4.6804Zm-15.1555,-4.6804c8.88178e-16,-1.7368 0.53296,-3.34801 1.44451,-4.68042l4.68042,4.68042l-4.68042,4.6804c-0.91155,-1.3324 -1.44451,-2.9436 -1.44451,-4.6804Zm8.3,8.3c-1.7368,0 -3.34801,-0.533 -4.68042,-1.4445l4.68042,-4.6804l4.6804,4.6804c-1.3324,0.9115 -2.9436,1.4445 -4.6804,1.4445Z"
                        ></path>
                      </svg> */}
                    </td>
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
