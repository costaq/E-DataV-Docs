<!--
 * @Autor: costa
 * @Date: 2023-08-10 14:07:06
 * @LastEditors: costa
 * @LastEditTime: 2023-08-10 14:41:06
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 排名轮播图

::: danger 注意

最近因工作原因，React及vue2版本暂不支持，后续会陆续支持。Vue3版本后续也将增加更多属性，以支持更多场景，目前只是最基本的功能

:::

## 基本示例

<script setup>
import ScrollRankingBoard from './components/ScrollRankingBoard.vue';
</script>

<scroll-ranking-board />

::: details 点击查看代码

::: code-group

```vue [vue3]

<template>
    <e-scroll-ranking-board style="height:250px;width:450px;" :items="items" @rowClick="handleClick"></e-tab>
</template>
<script setup>
import { EScrollRankingBoard } from 'e-datav-vue3';

const items = Array(10).fill(0).map((item, index) => {
    return {
        label: `测试${index}`,
        value: index * 100
    }
})

const handleClick = (value, rowIndex) => {
    console.log(value, rowIndex);
}
</script>

```

:::

## 整页滚动

<scroll-ranking-board type="page" />

::: details 点击查看代码

::: code-group

```vue [vue3]

<template>
    <e-scroll-ranking-board style="height:250px;width:450px;" type="page" :items="items" @rowClick="handleClick"></e-tab>
</template>
<script setup>
import { EScrollRankingBoard } from 'e-datav-vue3';

const items = Array(10).fill(0).map((item, index) => {
    return {
        label: `测试${index}`,
        value: index * 100
    }
})

const handleClick = (value, rowIndex) => {
    console.log(value, rowIndex);
}
</script>

```

:::

## 自定义高亮颜色

<scroll-ranking-board :highlight-colors="['#FF6E76', '#FFA600', '#FFD600']" />

::: details 点击查看代码

::: code-group

```vue [vue3]

<template>
    <e-scroll-ranking-board style="height:250px;width:450px;" :items="items" @rowClick="handleClick" :highlight-colors="['#FF6E76', '#FFA600', '#FFD600']"></e-tab>
</template>
<script setup>
import { EScrollRankingBoard } from 'e-datav-vue3';

const items = Array(10).fill(0).map((item, index) => {
    return {
        label: `测试${index}`,
        value: index * 100
    }
})

const handleClick = (value, rowIndex) => {
    console.log(value, rowIndex);
}
</script>

```

:::

## 属性

| 字段        |      类型      |  备注 |
| :--------: | :-----------: | :----: |
| items | ScrollRankingBoardItem[] | 数据源 |
| rowNum | number | 显示的行数，默认5 |
| interval | number | 滚动间隔(ms)，默认3000ms |
| type | string | 滚动类型，默认single，single单个滚动，page整页滚动 |
| highlightRowNum | number | 高亮行数，默认3 |
| highlightColors | string[] | 高亮颜色，默认['#1e80ff', '#4cc7f3', '#CDDC39'] |
| rankingFontSize | number | 排名字号，默认18 |
| labelFontSize | number | 文本字号，默认14 |
| valueFontSize | number | 值字号，默认18 |
| color | string | 字体颜色, 默认#fff |


### ScrollRankingBoardItem

| 字段        |      <div style="width:200px;">类型</div>      |  <div style="width:350px;">备注</div> |
| :--------: | :-----------: | :----: |
| label | string | 标签 |
| value | number | 值 |


## 事件
| 名称      |  <div style="width:560px;">备注</div> |
| :--------: | :-----------: |
| rowClick|点击行时触发，返回当前行item对象及行索引rowIndex |