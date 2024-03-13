<!--
 * @Author: bbw 1526699702@qq.com
 * @Date: 2024-01-12 09:26:02
 * @LastEditors: bbw 1526699702@qq.com
 * @LastEditTime: 2024-01-12 10:45:24
 * @FilePath: \el-bbw\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex w-full h-[100vh]">
    <div></div>
    <div class="w-[500px] h-[500px]">
      <MyForm></MyForm>
    </div>
    <div class="w-[500px] h-[500px]">
    </div>
    <div class="w-[500px] h-[500px]">
      <MyDrawer></MyDrawer>
    </div>
    <div class="w-[500px] h-[500px]">
      <MyTransfer></MyTransfer>
    </div>
    <div class="w-[500px] h-[500px]">
      <MyDialog></MyDialog>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { MyForm,MyDrawer, MyTransfer, MyDialog } from "./components/el-bbw";
</script>

<style lang="scss" scoped>

</style>