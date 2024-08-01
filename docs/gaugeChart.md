<!--
 * @Autor: costa
 * @Date: 2023-11-23 11:07:33
 * @LastEditors: costa
 * @LastEditTime: 2024-01-22 15:37:33
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 仪表盘

## 基本示例

<gauge-chart :value="66" />

<script setup>
import GaugeChart from './components/GaugeChart.vue';
</script>

::: details 点击查看代码

::: code-group

```js [vue2]

<template>
  <div style="height:300px;width: 300px;">
    <e-gauge-chart :value="value" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: 66
    }
  }
}
</script>

```

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

## 显示文本标题示例

<gauge-chart :value="66" text="今日完成率" :textFontSize="24" />

::: details 点击查看代码

::: code-group

```js [vue3]

<template>
    <div style="height:300px;width: 300px;">
        <e-gauge-chart :value="value" text="今日完成率" :textFontSize="24" />
    </div>
</template>
<script setup>
import { EGaugeChart } from 'e-datav-vue3';
const value = ref(66);
</script>

```

:::

## 属性

字段|类型|<div style="width:430px;">备注</div>
-|-|-
value|Number|百分比值，仅限0-100之间值
valueFontSize|Number|数值字体大小，默认30
text|String|文本标题内容
textFontSize|Number|文本字体大小，默认30
spacing|Number|文字上下间距，默认2