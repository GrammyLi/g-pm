import React from "react";
import Button from "../../componets/Button";
import Input from "../../componets/Input";

// import "./SearchPage.css";
/** 获取数据的接口 */

import { log } from "../../static/js/utils";

class ExamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>g-button</h1>
        <Button value="default" />
        <Button type="primary" value="primary" />
        <Button type="text" value="text" />
        <Button type="link" value="link" />
        
        <h1>size</h1>
        <Button value="default size"  />
        <Button value="small size" size="small"  />
        <Button value="large size" size="large"  />

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
        <Button type="primary" value="primary" />
        {/* <Button type="primary" value="primary" shape="circle" />
        <Button type="primary" value="primary" shape="circle" size="large" />
        <Button type="primary" value="primary" shape="circle" size="small" /> */}


        <Button type="primary" value="primary" shape="round" />
        <Button type="primary" value="primary large" shape="round" size="large" />
        <Button type="primary" value="primary small" shape="round" size="small" />


      </div>
    );
  }
}
export default ExamplePage;

