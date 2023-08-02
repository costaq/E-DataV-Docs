<!--
 * @Autor: costa
 * @Date: 2023-08-01 13:49:12
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 13:55:11
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# Tab

## 基本示例

<script setup>
import Tab from './components/Tab.vue';
const items = [
  {
    label: 'tab1',
    value: 'tab1'
  },
  {
    label: 'tab2',
    value: 'tab2'
  },
  {
    label: 'tab3',
    value: 'tab3'
  }
]
</script>

<tab style="height:160px;" />

::: details 点击查看代码

::: code-group

```vue [vue2]

<template>
  <div id="app">
    <e-tab style="width:500px;height:160px;" :items="items" :columns="3" @change="handleChange"></e-tab>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        { label: 'Tab1', value: 'tab1' },
        { label: 'Tab2', value: 'tab2' },
        { label: 'Tab3', value: 'tab3' }
      ],
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

```

```vue [vue3]

<template>
    <e-tab style="width:500px;height: 160px;" :items="items" :columns="3" @change="handleClick"></e-tab>
</template>
<script setup>
import { ETab } from 'e-datav-vue3';

const items = [
    { label: 'Tab1', value: 'tab1' },
    { label: 'Tab2', value: 'tab2' },
    { label: 'Tab3', value: 'tab3' }
]

const handleClick = (value) => {
    console.log(value);
}
</script>

```

```js [react]

import { Tab } from 'e-datav-react';

function Page() {
  const items = [
    { label: 'Tab1', value: 'tab1' },
    { label: 'Tab2', value: 'tab2' },
    { label: 'Tab3', value: 'tab3' }
  ]

  const handleChange = (value) => {
    console.log(value);
  }

  return (
    <div style="height:160px;width:500px;">
      <Tab items={items} onChange={handleChange} columns={3}></Tab>
    </div>
  )
}

export default Page

```

:::

## 属性

| 字段        |      类型      |  备注 |
| :--------: | :-----------: | :----: |
| value|Number或String|非必填，必须是数字或字符串，指定当前值，若不指定，则会默认选中items中的第一个 |
| items|TabItem[]|项，必填 |
| columns|Number|列数，非必填，默认值3，表示显示3列，单竖列效果即传值1即可 |
| margin|Number|间距，非必填，默认每项间距10px |
| fontSize|Number|文本字号，非必填，默认16 |
| fontColor|Number|文本颜色，非必填，默认#fff |
| backgroundColor|Number|背景色，非必填，默认transparent |
| duration|Number|动画持续时间，非必填，默认值3，表示3秒 |
| borderColors|Number|边框渐变颜色，非必填，默认值['#1CE3B6', '#1F38F1', '#F95A5A'] |


#### TabItem

| 字段        |      类型      |  备注 |
| :--------: | :-----------: | :----: |
| label|String|文本，必填 |
| value|Number或String|值，必填 |
| icon|Function|图标，非必填，Vue3 返回一个h函数，可自定义图标，如：() => h('div', { class: 'icon' })，也可使用第三方图标库，Vue2及React暂时不支持 |



