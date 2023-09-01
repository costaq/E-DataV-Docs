<!--
 * @Autor: costa
 * @Date: 2023-09-01 14:53:16
 * @LastEditors: costa
 * @LastEditTime: 2023-09-01 15:08:31
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container>
        <component v-if="compRef" :is="compRef" :text="text" :colors="colors"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref } from 'vue';

defineProps({
    text: {
        type: String,
        default: ''
    },
    colors: {
        type: Array,
        default: () => ['#fff', '#1e80ff']
    }
})

const compRef = shallowRef(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EDynamicText;
    })
});
</script>