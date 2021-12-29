import React from "react";
import AsyncValidator from "async-validator";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import { log } from "../../static/js/utils";

const createForm = () => {
  return (Comp) => {
    const data = {};
    return class Form extends React.Component {
      getFieldProps = (key, options = {}) => {
        log("key", key);
        return {
          key,
          disabled: options.disabled ? options.disabled(this.getFieldValue()) : undefined,
          onInput: (e) => {
            const v = e.target.value;
            log("v", v);
            data[key] = data[key] || {};
            data[key].value = v;
            log("!options.validator", !options.validator);
            if (!options.validator) {
              return;
            }
            // 验证的规则
            const validator = new AsyncValidator({
              [key]: options.validator,
            });
            // 验证表单数据的值
            validator
              .validate({
                [key]: v,
              })
              .then(() => {
                data[key].error = null;
                log("验证成功");
              })
              .catch(({ errors }) => {
                log("err", errors);
                const err = errors.map((e) => e.message).join(',')
                log("err", err);
                data[key].error = err;
              })
              .then(() => {
                this.forceUpdate();
              });
          },
        };
      };

      getFieldValue = () => {
        return data;
      };

      getFieldError = (key) => {
        const err = data[key] && data[key].error
        return err
      }

      render() {
        const form = {
          getFieldProps: this.getFieldProps,
          getFieldValue: this.getFieldValue,
          getFieldError: this.getFieldError,
        };
        return <Comp form={form} />;
      }
    };
  };
};

const Test3 = ({ form }) => {
  return (
    <div style={{ marginLeft: "24px" }}>
      msg:
      <Input
        {...form.getFieldProps("msg", {
          validator: [
            {
              required: true,
              message: "username required",
            },
            {
              min: 3,
              max: 10,
              message: "meassage err err",
            },
          ],
        })}
        className={form.getFieldError('msg') ? 'g-red-border' : null}
      />
      <div className="g-red-color">{form.getFieldError('msg')}</div>


      comment:
      <Input
        {...form.getFieldProps("comment", {
          validator: [
            {
              required: true,
              message: "username required",
            },
            {
              min: 5,
              max: 10,
              message: "meassage err err",
            },
          ],
          disabled(data) {
            return data.msg === 'www'
          }
        })}
        className={form.getFieldError('comment') ? 'g-red-border' : null}
      />
      <div className="g-red-color">{form.getFieldError('comment')}</div>
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

export default createForm()(Test3);
