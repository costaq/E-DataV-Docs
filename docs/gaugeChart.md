<!--
 * @Autor: costa
 * @Date: 2023-11-23 11:07:33
 * @LastEditors: costa
 * @LastEditTime: 2023-12-11 16:04:55
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 仪表盘

::: warning 注意
目前仅支持vue3及react版本，vue2版本后续会增加
:::

## 基本示例


<gauge-chart :value="66" />

<script setup>
import GaugeChart from './components/GaugeChart.vue';
</script>

::: details 点击查看代码

::: code-group

```js [vue3]

<template>
    <div style="height:300px;width: 300px;">
        <e-gauge-chart :value="value" />
    </div>
</template>
<script setup>
import { EGaugeChart } from 'e-datav-vue3';
const value = ref(66);
</script>

```

```js [react]

import { GaugeChart } from 'e-datav-react';

function Page() {
  const [value, setValue] = useState(66);

  return (
    <div style={{ width: 300, height: 300 }}>
      <GaugeChart value={value} />
    </div>
  )
}

export default Page

```

:::

## 属性

字段|类型|<div style="width:430px;">备注</div>
-|-|-
value|Number|百分比值，仅限0-100之间值
valueFontSize|Number|数值字体大小，默认30