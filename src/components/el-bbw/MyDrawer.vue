<!--
 * @Author: bbw 1526699702@qq.com
 * @Date: 2023-09-12 14:33:45
 * @LastEditors: bbw 1526699702@qq.com
 * @LastEditTime: 2024-01-12 09:44:11
 * @FilePath: \smart-web\src\components\page\MyDrawer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- eslint-disable -->
<template>
  <!-- 弹框 -->
  <el-drawer ref="drawerRef" v-model="props.config.dialog" :title="props.config.title"
    :direction="'rtl'" :size="props.size" :before-close="beforeClose">
    <slot></slot>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick" plain>取消</el-button>
        <el-button type="primary" @click="confirmClick" :loading="props.loading">确认</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
// import { appInfoStore } from '@/stores';
defineOptions({
  name:'MyDrawer'
})

interface Drawer {
  dialog: boolean
  title?: string
}

interface Props {
  config: Drawer
  size?: string
  loading: boolean | undefined
}
const props = withDefaults(defineProps<Props>(), {
  config: () => ({ dialog: false }),
  size: '40%',
  loading: () => true
})

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

// 关闭按钮
function cancelClick() {
  emit('cancel')
}

//确定按钮
function confirmClick() {
  emit('confirm')
}

//关闭前回调
function beforeClose() {
  emit('cancel')
}

</script>

<style scoped></style>