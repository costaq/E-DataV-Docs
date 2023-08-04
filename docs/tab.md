# Tab

::: info 信息
此Tab组件与ElementUi及AntDesign的Tab组件不同，不包含Panel切换，它类似于RadioButtonGroup，至于未来是否会增加panel切换，暂时未定。大屏中经常需要使用到Tab，比如时间切换，地区切换等，此组件可满足大部分需求
:::

## 基本示例

<script setup>
import Tab from './components/Tab.vue';
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

## 带图标示例

<tab style="height:160px;" :show-icon="true" />

::: details 点击查看代码

::: code-group

```vue [vue3]

<template>
    <e-tab style="width:500px;height: 160px;" :items="items" :columns="3" @change="handleClick"></e-tab>
</template>
<script setup>
import { ETab } from 'e-datav-vue3';
import { h } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

const items = [
    { label: 'Tab1', value: 'tab1', icon: () => h(MailOutlined) },
    { label: 'Tab2', value: 'tab2', icon: () => h(MailOutlined) },
    { label: 'Tab3', value: 'tab3', icon: () => h(MailOutlined) }
]

const handleClick = (value) => {
    console.log(value);
}
</script>

```

```js [react]

import { Tab } from 'e-datav-react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

function Page() {
  const items = [
    { label: 'Tab1', value: 'tab1', icon: <AppstoreOutlined /> },
    { label: 'Tab2', value: 'tab2', icon: <MailOutlined /> },
    { label: 'Tab3', value: 'tab3', icon: <SettingOutlined /> }
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

## 竖列示例

<tab style="height:300px;" :columns="1" />

::: details 点击查看代码

::: code-group

```vue [vue2]

<template>
  <div id="app">
    <e-tab style="height:300px;width:200px;" :items="items" :columns="1" @change="handleChange"></e-tab>
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
    <e-tab style="height:300px;width:200px;" :items="items" :columns="1" @change="handleClick"></e-tab>
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
    <div style="height:300px;width:200px;">
      <Tab items={items} onChange={handleChange} columns={1}></Tab>
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

## 事件
| 名称      |  <div style="width:570px;">备注</div> |
| :--------: | :-----------: |
| change|切换时触发，参数为value值，如：tab1 |


#### TabItem

| 字段        |      类型      |  备注 |
| :--------: | :-----------: | :----: |
| label|String|文本，必填 |
| value|Number或String|值，必填 |
| icon|Vue3:Function,React:ReactNode|图标，非必填，Vue3 返回一个h函数，可自定义图标，如：() => h('div', { class: 'icon' })，也可使用第三方图标库， Vue2暂时不支持 |



::: danger 注意
Vue2后续将删除items参数，改为slots方式，以便支持icon自定义
:::



