<!--
 * @Autor: costa
 * @Date: 2023-08-01 13:49:37
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 14:32:09
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 水位图

<script setup>
import WaterLevelPond from './components/WaterLevelPond.vue';

</script>

## 基本示例

<water-level-pond />

::: details 点击查看代码

::: code-group
```js [vue2]

<template>
    <div>
        <e-water-level-pond style="width:200px;height:200px;" :value="56" />
    </div>
</template>

```
    
```js [vue3]

<template>
    <div>
        <e-water-level-pond style="width:200px;height:200px;" :value="56" />
    </div>
</template>
<script setup>
import { EWaterLevelPond } from 'e-datav-vue3';
</script>
    
```
    
```js [react]

import { WaterLevelPond } from 'e-datav-react';

function Page() {

  return (
    <div>
      <WaterLevelPond value={56} style={{ width: 200, height: 200 }} />
    </div>
  )
}

export default Page
    
```

:::

## 属性
| 字段        |      类型      |  备注 |
| :--------: | :-----------: | :-------: |
| value|Number|数值，必填 |
| decimals|Number|小数点，默认0 |
| duration|Number|数字变动时动画持续时间，默认3000毫秒 |
| fontSize|Number|字体大小，默认36 |
| fontColor|String|颜色，默认#000 |
| backgroundColor|String|背景色颜色，默认transparent透明 |
| waveColors|String[]|水波颜色，默认['#41a9e3', '#b0e0ff']，第一个参数为前波浪，后一个参数为后波浪 |