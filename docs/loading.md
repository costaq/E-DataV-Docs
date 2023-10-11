<!--
 * @Autor: costa
 * @Date: 2023-10-11 16:18:32
 * @LastEditors: costa
 * @LastEditTime: 2023-10-11 17:07:41
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# Loading加载

::: warning 注意
目前仅支持vue3版本，其他版本后续增加
:::


## 基本示例


<loading>加载中...</loading>

<script setup>
import Loading from './components/Loading.vue';
</script>

::: details 点击查看代码

::: code-group

```js [vue3]

<template>
    <div>
        <e-loading>
            加载中...
        </e-loading>
    </div>
</template>
<script setup>
import { ELoading } from 'e-datav-vue3';
</script>

```

:::

## 自定义属性

组件默认在父元素内居中显示，若需要在屏幕居中显示，请在样式中添绝对定位position:absolute，如下例子所示

<loading font-color="#ff9797" :font-size="12" border-color="#f53f3f" :size="80">加载中</loading>

::: details 点击查看代码

::: code-group

```js [vue3]

<template>
    <div>
        <e-loading font-color="#ff9797" :font-size="12" border-color="#f53f3f" :size="80" style="position:absolute;">
            加载中
        </e-loading>
    </div>
</template>
<script setup>
import { ELoading } from 'e-datav-vue3';
</script>

```

:::

## 属性

| 字段        |      类型      |  <div style="width:450px;">备注</div> |
| :--------: | :-----------: | :----: |
| fontColor | string | 文字颜色，默认#1e80ff |
| fontSize | number | 文字字体大小，默认16 |
| borderColor | string | 边框颜色，默认#1e80ff |
| size | number | 尺寸，即宽高，默认120 |