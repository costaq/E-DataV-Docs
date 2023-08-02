<!--
 * @Autor: costa
 * @Date: 2023-08-01 16:51:52
 * @LastEditors: costa
 * @LastEditTime: 2023-08-01 16:58:58
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container style="height: 300px;">
        <component v-if="compRef" :is="compRef" :border-color="borderColor" :line-width="lineWidth" :background-color="backgroundColor"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref } from 'vue';

defineProps({
    borderColor: {
        type: String,
        default: '#4cc7f3'
    },
    lineWidth: {
        type: Number,
        default: 10
    },
    backgroundColor: {
        type: String,
        default: 'rgba(76, 199, 243, 0.15)'
    },
})

const compRef = shallowRef(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EBorderBox2;
    })
});
</script>