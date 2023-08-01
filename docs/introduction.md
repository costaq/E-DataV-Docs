<!--
 * @Autor: costa
 * @Date: 2023-07-31 14:09:29
 * @LastEditors: costa
 * @LastEditTime: 2023-08-01 12:29:01
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 介绍

E-DataV是一个数据可视化组件库，拥有Vue2，Vue3，React三个版本，支持多种图表

## 安装

::: code-group

```js [vue2]

npm i e-datav

```

```js [vue3]

npm i e-datav-vue3

```

```js [react]

npm i e-datav-react

```

:::

## 使用

::: code-group

```js [vue2]

import Vue from 'vue'
import EDataV from 'e-datav'
// 全局组件注册
Vue.use(EDataV)

// 按需引入
import { EDigitalFlop } from 'e-datav'
Vue.use(EDigitalFlop)

```

```js [vue3]

import Vue from 'vue'
import EDataV from 'e-datav-vue3'
// 全局全部组件注册
Vue.use(EDataV)

// 按需引入，全局注册
import { EDigitalFlop } from 'e-datav-vue3'
Vue.use(EDigitalFlop)

// 单组件内按需引入
<script setup>
import { EDigitalFlop } from 'e-datav-vue3';
</script>

```

```js [react]

// 按需引入
import { FullScreenContainer, DigitalFlop } from 'e-datav-react';

```

:::