/*
 * @Author: bbw 1526699702@qq.com
 * @Date: 2024-01-12 09:26:02
 * @LastEditors: bbw 1526699702@qq.com
 * @LastEditTime: 2024-01-12 10:42:11
 * @FilePath: \el-bbw\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS(),],
  build: {
    outDir: "el-bbw", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, './src/components/el-bbw/index.ts'),
      name: 'el-bbw',
      fileName: "el-bbw",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }

})
