<!--
 * @Autor: costa
 * @Date: 2023-11-23 11:05:56
 * @LastEditors: costa
 * @LastEditTime: 2023-11-23 11:38:40
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container>
        <component style="height:300px;widht:300px;" v-if="compRef" :is="compRef" :value="val" :valueFontSize="valueFontSize"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref, onBeforeUnmount } from 'vue';

defineProps({
    value: {
        type: Number,
        default: 0
    },
    valueFontSize: {
        type: Number,
        default: 30
    }
})

const compRef = shallowRef(null);
const val = ref(66);
const interval = ref(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EGaugeChart;
    })

    interval.value = setInterval(() => {
        val.value = Math.round(Math.random()*99);
    }, 5000);
});

onBeforeUnmount(() => {
    interval.value = null;
});
</script>