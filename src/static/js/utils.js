/*
 * @Author: your name
 * @Date: 2021-10-18 12:48:50
 * @LastEditTime: 2021-12-29 09:53:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /g-design/src/static/js/utils.js
 */
// 调试代码工具
const debug = true
const log = debug ? console.log.bind(console, '*** debug ***') : () => {}

export {
  log,
}