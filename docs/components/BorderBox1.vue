<!--
 * @Autor: costa
 * @Date: 2023-08-01 15:59:46
 * @LastEditors: costa
 * @LastEditTime: 2023-08-01 16:13:49
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container style="height: 300px;">
        <component v-if="compRef" :is="compRef" :colors="colors"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref } from 'vue';

defineProps({
    colors: {
        type: Array,
        default: () => ['#5ddcff', '#4e00c2']
    },
})

const compRef = shallowRef(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EBorderBox1;
    })
});
</script>