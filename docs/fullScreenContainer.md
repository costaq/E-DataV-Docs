<!--
 * @Autor: costa
 * @Date: 2023-08-01 13:50:05
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 11:09:23
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
# 全屏组件

::: info 介绍
全屏组件根据预设尺寸，自动适配全屏，默认尺寸为1920*1080，根据此尺寸，自动计算缩放比例，适配全屏，可通过设置`width`和`height`属性，自定义尺寸
:::

::: code-group
```js [vue2]

<template>
    <div>
        <e-full-screen-container>
            <div>
                <e-digital-flop />
            </div>
        </e-full-screen-container>
    </div>
</template>

```
    
```js [vue3]

<template>
    <div>
        <e-full-screen-container>
            <div>
                <e-digital-flop />
            </div>
        </e-full-screen-container>
    </div>
</template>
<script setup>
import { EDigitalFlop, EFullScreenContainer } from 'e-datav-vue3';
</script>
    
```
    
```js [react]

import { FullScreenContainer, DigitalFlop } from 'e-datav-react';

function Page() {

  return (
    <div>
      <FullScreenContainer>
        <DigitalFlop value={5000} />
      </FullScreenContainer>
    </div>
  )
}

export default Page
    
```

:::

## 属性

字段|类型|备注
-|-|-
type|String|数值，默认'full', 其他可选类型：full（全屏拉伸） full-width（宽度拉伸 ）full-height（高度拉伸）initial （默认不拉伸）
width|Number|大屏设计稿宽度，也就是公司设计师出的效果图尺寸，默认1920
height|Number|大屏设计稿高度，默认1080