<!--
 * @Autor: costa
 * @Date: 2023-08-01 13:45:29
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 10:46:54
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 边框

::: danger 注意
所有的边框组件，默认根据父元素宽高自适应，如果父元素宽高为0，边框组件将不会显示，这种情况则需要设置组件宽高
:::

## 边框1

### 基本示例

<script setup>
import BorderBox1 from './components/BorderBox1.vue';
import BorderBox2 from './components/BorderBox2.vue';
</script>

<border-box-1 />

::: details 点击查看代码

::: code-group
```js [vue2]

<template>
    <e-border-box-1 style="width:500px; height:300px;">
    </e-border-box-1>
</template>

```
    
```js [vue3]

<template>
    <e-border-box-1 style="width:500px; height:300px;">
    </e-border-box-1>
</template>
<script setup>
import { EBorderBox1 } from 'e-datav-vue3';
</script>
    
```
    
```js [react]
import { BorderBox1 } from 'e-datav-react';

<BorderBox1 style={{ height: 300, width: 500 }}>
</BorderBox1>
    
```

:::

### 自定义颜色

<border-box-1 :colors="['#f3f070', '#dd4c1f']" />

::: details 点击查看代码

::: code-group
```vue [vue2]

<template>
    <e-border-box-1 style="height:300px;width:500px; " :colors="['#f3f070', '#dd4c1f']">
    </e-border-box-1>
</template>

```
    
```vue [vue3]

<template>
    <e-border-box-1 style="height:300px;width:500px; " :colors="['#f3f070', '#dd4c1f']">
    </e-border-box-1>
</template>
<script setup>
import { EBorderBox1 } from 'e-datav-vue3';
</script>
    
```
    
```js [react]

import { BorderBox1 } from 'e-datav-react';

<BorderBox1 style={{ height: 300, width: 500 }} colors={['#f3f070', '#dd4c1f']}>
</BorderBox1>
    
```

:::

### 属性
| 字段        |      <div style="width:140px">类型</div>      |  备注 |
| ------------- | :-----------: | ----: |
| borderRadius|Number|边框圆角，默认值3 |
| borderWidth|Number|边框宽度，默认值3 |
| colors|String[]|渐变颜色，默认值['#5ddcff', '#4e00c2']，只接受2个值 |
| duration|Number|动画持续时间，默认值4，单位秒 |


## 边框2

### 基本示例

<border-box-2 />

::: details 点击查看代码

::: code-group
```js [vue2]

<template>
    <e-border-box-2 style="width:500px; height:300px;">
    </e-border-box-2>
</template>

```
    
```js [vue3]

<template>
    <e-border-box-2 style="width:500px; height:300px;">
    </e-border-box-2>
</template>
<script setup>
import { EBorderBox2 } from 'e-datav-vue3';
</script>
    
```
    
```js [react]

import { BorderBox2 } from 'e-datav-react';

<BorderBox2 style={{ height: 300, width: 500 }}>
</BorderBox2>
    
```

:::

### 自定义

<border-box-2 border-color="#e2777a" :line-width="30" background-color="#e2777a26" />

::: details 点击查看代码

::: code-group
```js [vue2]

<template>
    <e-border-box-2 style="width:500px; height:300px;" border-color="#e2777a" :line-width="30" background-color="#e2777a26">
    </e-border-box-2>
</template>

```
    
```js [vue3]

<template>
    <e-border-box-2 style="width:500px; height:300px;" border-color="#e2777a" :line-width="30" background-color="#e2777a26">
    </e-border-box-2>
</template>
<script setup>
import { EBorderBox2 } from 'e-datav-vue3';
</script>
    
```
    
```js [react]

import { BorderBox2 } from 'e-datav-react';

<BorderBox2 style={{ height: 300, width: 500 }} borderColor="#e2777a" lineWidth={30} backgroundColor="#e2777a26">
</BorderBox2>
    
```

:::

### 属性
| 字段        |      <div style="width:140px">类型</div>      |  <div style="width:320px">备注</div> |
| ------------- | :-----------: | ----: |
| borderColor|String|边框颜色，默认值#4cc7f3 |
| borderWidth|Number|边框宽度，默认值2 |
| lineWidth|Number|边框线长度，默认值10 |
| backgroundColor|String|背景色，默认值rgba(76, 199, 243, 0.15) |