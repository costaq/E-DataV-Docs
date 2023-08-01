<!--
 * @Autor: costa
 * @Date: 2023-07-31 16:19:42
 * @LastEditors: costa
 * @LastEditTime: 2023-08-01 11:42:36
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container>
        <component v-if="compRef" :is="compRef" color="#fff" :value="value" :decimals="decimals" :separator="separator"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref, defineProps } from 'vue';

defineProps({
    decimals: {
        type: Number,
        default: 0
    },
    separator: {
        type: String,
        default: ''
    }
})

const compRef = shallowRef(null);
const value = ref(1000);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EDigitalFlop;
    })
});
</script>