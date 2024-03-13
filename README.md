## vite 发布

```js
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
```