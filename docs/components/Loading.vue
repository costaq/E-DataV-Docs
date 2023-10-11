<!--
 * @Autor: costa
 * @Date: 2023-10-11 16:14:36
 * @LastEditors: costa
 * @LastEditTime: 2023-10-11 16:25:09
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container>
        <component v-if="compRef" :is="compRef" :font-size="fontSize" :font-color="fontColor" :size="size" :border-color="borderColor">
            <slot></slot>
        </component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref } from 'vue';

const compRef = shallowRef(null);

const props = defineProps({
    fontColor: {
        type: String,
        default: '#1e80ff'
    },
    /**
     * @description 文字字体大小
     */
    fontSize: {
        type: Number,
        default: 16
    },
    /**
     * @description 边框颜色
     */
    borderColor: {
        type: String,
        default: '#1e80ff'
    },
    /**
     * @description 尺寸，即宽高
     */
    size: {
        type: Number,
        default: 120
    }
})

onMounted(() => {
    import('e-datav-vue3').then((module) => {
        compRef.value = module.ELoading;
    })
});
</script>