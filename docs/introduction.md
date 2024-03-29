<!--
 * @Autor: costa
 * @Date: 2023-07-31 14:09:29
 * @LastEditors: costa
 * @LastEditTime: 2024-01-22 15:39:51
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 介绍

E-DataV是一个数据可视化组件库，拥有Vue2，Vue3，React三个版本，支持多种图表

最近因工作原因，更新相对缓慢，有时间会陆续更新

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

## UMD

::: code-group

```js [vue2]

<body>
    <div id="app">
        <e-digital-flop :value="9999" separator=","></e-digital-flop>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/e-datav/dist/e-datav.min.vue.js"></script>
<script>
    new Vue({
        el: '#app'
    })
</script>

```

```js [vue3]

<body>
    <div id="app">
        <e-full-screen-container>
            <e-digital-flop :value="9999" separator="," color="#c75151"></e-digital-flop>
        </e-full-screen-container>
    </div>
</body>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/e-datav-vue3/umd/e-datav-vue3.umd.js"></script>
<script>
    const { createApp } = Vue;
    const { EDigitalFlop, EFullScreenContainer } = EDataV;

    const App = createApp();
    App.component('EDigitalFlop', EDigitalFlop);
    App.component('EFullScreenContainer', EFullScreenContainer);
    App.mount('#app');
</script>

```

:::

::: tip 注意
目前除了数字翻牌器、动态文字外，其他组件默认均根据父元素宽高自适应，也可以通过设置组件的width和height属性来设置组件的宽高
:::