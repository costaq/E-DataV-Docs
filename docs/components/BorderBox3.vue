<!--
 * @Autor: costa
 * @Date: 2023-08-01 16:51:52
 * @LastEditors: costa
 * @LastEditTime: 2023-09-13 15:35:05
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container style="height: 300px;">
        <component v-if="compRef" :is="compRef" :font-color="fontColor" :text-position="textPosition" :text="text" :border-color="borderColor" :background-color="backgroundColor">
            <slot></slot>
        </component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref } from 'vue';

defineProps({
    borderColor: {
        type: String,
        default: '#00ecfb'
    },
    backgroundColor: {
        type: String,
        default: '#00ecfb26'
    },
    text: {
        type: String
    },
    textPosition: {
        type: String,
        default: 'left'
    },
    fontColor: {
        type: String,
        default: '#000'
    },
})

const compRef = shallowRef(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EBorderBox3;
    })
});
</script>