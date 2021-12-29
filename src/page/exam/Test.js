/*
 * @Author: your name
 * @Date: 2021-12-28 19:16:02
 * @LastEditTime: 2021-12-28 19:26:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-pm/src/page/exam/Test.js
 */
import React from "react";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import { log } from "../../static/js/utils";
const createForm = () => {
  return (Comp) => {
    const data = {};
    return class Form extends React.Component {
      getFieldProps = (key, options) => {
        log("key", key);
        return {
          key,
          onInput: (e) => {
            const v = e.target.value;
            data[key] = v;
          },
        };
      };

      getFieldValue = () => {
        return data;
      };

      render() {
        const form = {
          getFieldProps: this.getFieldProps,
          getFieldValue: this.getFieldValue,
        };
        return <Comp form={form} />;
      }
    };
  };
};

const Test = ({ form }) => {
  return (
    <div style={{marginLeft: '24px'}}>
     username: <Input {...form.getFieldProps("username")} />
     height: <Input {...form.getFieldProps("height")} />

      <Button
        type="primary"
        value="提交"
        onClick={(e) => {
          log("form values", form.getFieldValue());
        }}
      />
      
    </div>
  );
};

export default createForm()(Test);
