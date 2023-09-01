<!--
 * @Autor: costa
 * @Date: 2023-09-01 15:03:20
 * @LastEditors: costa
 * @LastEditTime: 2023-09-01 15:38:35
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 动态文字

::: danger 注意

React及vue2版本暂不支持，后续会陆续支持。

:::


## 基本示例


<dynamic-text text="E-DATAV数据可视化大屏" style="font-size: 36px;font-weight: bold;" />

<script setup>
import DynamicText from './components/DynamicText.vue';
</script>

::: details 点击查看代码

::: code-group

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

:::

## 自定义颜色

<dynamic-text text="E-DATAV数据可视化大屏" style="font-size: 36px;font-weight: bold;" :colors="['#f53f3f', '#1e80ff']" />

::: details 点击查看代码

::: code-group

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

:::

## 属性

| 字段        |      类型      |  备注 |
| :--------: | :-----------: | :----: |
| text | string | 文字 |
| spacing | number | 左右间距，默认5 |
| colors | string[] | 文本渐变颜色，只支持两种颜色，第一个为起始颜色，第二个为结束颜色，默认['#fff', '#1e80ff'] |