<!--
 * @Autor: costa
 * @Date: 2023-09-01 15:03:20
 * @LastEditors: costa
 * @LastEditTime: 2023-09-11 15:32:45
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 动态文字


## 基本示例


<dynamic-text text="E-DATAV数据可视化大屏" style="font-size: 36px;font-weight: bold;" />

<script setup>
import DynamicText from './components/DynamicText.vue';
</script>

::: details 点击查看代码

::: code-group

```js [vue2]

<template>
  <div id="app">
    <e-dynamic-text :text="text" style="font-size: 36px;font-weight: bold;" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      text: 'E-DATAV数据可视化大屏'
    }
  }
}
</script>

```

```js [vue3]

<template>
    <div>
        <e-dynamic-text text="E-DATAV数据可视化大屏" style="font-size: 36px;font-weight: bold;" />
    </div>
</template>
<script setup>
import { EDynamicText } from 'e-datav-vue3';
</script>

```

```js [react]

import { EDynamicText } from 'e-datav-react';

function Page() {
  return (
    <div>
      <DynamicText text={'E-DATAV数据可视化大屏'} style={{ fontSize: 36, fontWeight: 'bold' }} />
    </div>
  )
}

export default Page

```

:::

## 自定义颜色

<dynamic-text text="E-DATAV数据可视化大屏" style="font-size: 36px;font-weight: bold;" :colors="['#f53f3f', '#1e80ff']" />

::: details 点击查看代码

::: code-group

```js [vue2]

<template>
  <div id="app">
    <e-dynamic-text :text="text" style="font-size: 36px;font-weight: bold;" :colors="['#f53f3f', '#1e80ff']" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      text: 'E-DATAV数据可视化大屏'
    }
  }
}
</script>

```

```js [vue3]

<template>
    <div>
        <e-dynamic-text text="E-DATAV数据可视化大屏" style="font-size: 36px;font-weight: bold;" :colors="['#f53f3f', '#1e80ff']" />
    </div>
</template>
<script setup>
import { EDynamicText } from 'e-datav-vue3';
</script>

```

```js [react]

import { EDynamicText } from 'e-datav-react';

function Page() {
  return (
    <div>
      <DynamicText text={'E-DATAV数据可视化大屏'} style={{ fontSize: 36, fontWeight: 'bold' }} colors={['#f53f3f', '#1e80ff']} />
    </div>
  )
}

export default Page

```

:::

## 属性

| 字段        |      类型      |  备注 |
| :--------: | :-----------: | :----: |
| text | string | 文字 |
| spacing | number | 左右间距，默认5 |
| colors | string[] | 文本渐变颜色，只支持两种颜色，第一个为起始颜色，第二个为结束颜色，默认['#fff', '#1e80ff'] |