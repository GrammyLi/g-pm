/*
 * @Author: your name
 * @Date: 2021-11-29 12:24:12
 * @LastEditTime: 2021-12-29 19:19:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/exam/ExamplePage.js
 */
import React from "react";
import Test from "./Test"
import Test2 from "./Test2"
import Test3 from "./Test3"
 
class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>
          <h1>常规的表单</h1>
          <Test />
        </div>
        <div>
          <h1>加了验证</h1>
          <Test2 />
        </div>

        <div>
          <h1>表单联动</h1>
          <Test3 />
        </div>
      </div>
    );
  }
}
export default FormPage;
