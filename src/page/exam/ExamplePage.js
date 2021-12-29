/*
 * @Author: your name
 * @Date: 2021-11-29 12:24:12
 * @LastEditTime: 2021-12-29 14:34:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/exam/ExamplePage.js
 */
import React from "react";
import Test from "./Test"
import Test2 from "./Test2"
import Test3 from "./Test3"
// import Button from "../../componets/Button";
// import { log } from "../../static/js/utils";
// import Input from "../../componets/Input";

// import "./SearchPage.css";
/** 获取数据的接口 */

// import { log } from "../../static/js/utils";



class ExamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        {/* <h1>g-button</h1> */}
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
        {/* <Button value="default" />
        <Button type="primary" value="primary" />
        <Button type="text" value="text" />
        <Button type="link" value="link" />

        <h1>size</h1>
        <Button value="default size" />
        <Button value="small size" size="small" />
        <Button value="large size" size="large" />

        <h1>disabled</h1>
        <Button type="primary" value="primary" />
        <Button type="primary" value="primary disabled" disabled={true} />

        <Button value="default" />
        <Button value="default disabled" disabled={true} />

        <Button type="text" value="text" disabled={false} />
        <Button type="text" value="text disabled" disabled={true} />

        <Button type="link" value="link" disabled={false} />
        <Button type="link" value="link disabled" disabled={true} />

        <h1>loading</h1>
        <Button value="default loading" loading={true} />
        <Button value="primary loading" loading={true} />

        <h1>danger</h1>
        <Button value="default" danger={false} />
        <Button value="default danger" danger={true} />

        <Button type="link" value="link" />
        <Button type="link" value="link danger" danger={true} />

        <Button type="text" value="text" />
        <Button type="text" value="text danger" danger={true} />

        <Button type="primary" value="primary" />
        <Button type="primary" value="primary danger" danger={true} />

        <Button type="dashed" value="dashed" />
        <Button type="dashed" value="dashed danger" danger={true} />

        <h1>shape</h1>
        <Button type="primary" value="primary" /> */}
        {/* <Button type="primary" value="primary" shape="circle" />
        <Button type="primary" value="primary" shape="circle" size="large" />
        <Button type="primary" value="primary" shape="circle" size="small" /> */}

        {/* <Button type="primary" value="primary" shape="round" />
        <Button
          type="primary"
          value="primary large"
          shape="round"
          size="large"
        />
        <Button
          type="primary"
          value="primary small"
          shape="round"
          size="small"
        /> */}
      </div>
    );
  }
}
export default ExamplePage;
