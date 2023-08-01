

# 数字翻牌器


## 基本示例


<digital-flop />

<script setup>
import DigitalFlop from './components/DigitalFlop.vue';
</script>

::: details 点击查看代码

::: code-group

```js [vue2]

<template>
  <div id="app">
    <e-digital-flop color="#fff" :value="value" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: 1000
    }
  }
}
</script>

```

```js [vue3]

<template>
    <div>
        <e-digital-flop color="#fff" :value="value" />
    </div>
</template>
<script setup>
import { EDigitalFlop } from 'e-datav-vue3';
const value = ref(1000);
</script>

```

```js [react]

import { DigitalFlop } from 'e-datav-react';

function Page() {
  const [value, setValue] = useState(1000);

  return (
    <div>
      <DigitalFlop value={value} color="#fff" />
    </div>
  )
}

export default Page

```

:::

## 带小数点

<digital-flop :decimals="2" />

::: details 点击查看代码

::: code-group

```js [vue2]

<template>
  <div id="app">
    <e-digital-flop color="#fff" :value="value" :decimals="2" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: 1000
    }
  }
}
</script>

```

```js [vue3]

<template>
    <div>
        <e-digital-flop color="#fff" :value="value" :decimals="2" />
    </div>
</template>
<script setup>
import { EDigitalFlop } from 'e-datav-vue3';
const value = ref(1000);
</script>

```

```js [react]

import { DigitalFlop } from 'e-datav-react';

function Page() {
  const [value, setValue] = useState(1000);

  return (
    <div>
      <DigitalFlop value={value} color="#fff" decimals={2} />
    </div>
  )
}

export default Page

```

:::


## 带千位分隔符

<digital-flop :separator="','" />

::: details 点击查看代码

::: code-group

```js [vue2]

<template>
  <div id="app">
    <e-digital-flop color="#fff" :value="value" :separator="separator" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: 1000,
      separator: ','
    }
  }
}
</script>

```

```js [vue3]

<template>
    <div>
        <e-digital-flop color="#fff" :value="value" :separator="','" />
    </div>
</template>
<script setup>
import { EDigitalFlop } from 'e-datav-vue3';
const value = ref(1000);
</script>

```

```js [react]

import { DigitalFlop } from 'e-datav-react';

function Page() {
  const [value, setValue] = useState(1000);

  return (
    <div>
      <DigitalFlop value={value} color="#fff" separator="," />
    </div>
  )
}

export default Page

```

:::


## 属性
| 字段        |      <div style="width:180px">类型</div>      |  备注 |
| ------------- | :-----------: | ----: |
| value|Number|数值，默认1000 |
| decimals|Number|小数点，默认0 |
| duration|Number|持续时间，默认3000毫秒 |
| fontSize|Number|字体大小，默认50 |
| fontFamily|String|字体，默认液晶字体，传空值则恢复正常浏览器字体 |
| color|String|颜色，默认#000 |
| separator|String|千位分隔符，默认'' |
