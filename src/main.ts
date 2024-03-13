/*
 * @Author: bbw 1526699702@qq.com
 * @Date: 2024-01-12 09:26:02
 * @LastEditors: bbw 1526699702@qq.com
 * @LastEditTime: 2024-01-12 10:31:55
 * @FilePath: \el-bbw\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:windi.css'
// import MukUI from "./components/el-bbw";

const app = createApp(App)
app.use(ElementPlus)
// app.use(MukUI); //注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
