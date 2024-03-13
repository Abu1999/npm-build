/*
 * @Author: bbw 1526699702@qq.com
 * @Date: 2024-01-12 09:28:30
 * @LastEditors: bbw 1526699702@qq.com
 * @LastEditTime: 2024-01-12 10:30:14
 * @FilePath: \el-bbw\src\components\el-bbw\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import MyForm from "./MyForm.vue";
import MyTable from "./MyTable.vue";
import MyDrawer from "./MyDrawer.vue";    // 抽屉弹窗
import MyTransfer from "./MyTransfer.vue";  // 穿梭框 + 树数据
import MyDialog from "./MyDialog.vue";  // 弹框播放器

export { MyForm, MyTable, MyDrawer, MyTransfer, MyDialog }


const components = [MyForm, MyTable, MyDrawer, MyTransfer, MyDialog,];

const install = (App:any)=> {
	components.forEach((component) => {
		App.component(component.name,component);
	});
};


export default { install } // 批量的引入*