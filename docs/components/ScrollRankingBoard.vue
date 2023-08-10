<!--
 * @Autor: costa
 * @Date: 2023-08-10 13:44:39
 * @LastEditors: costa
 * @LastEditTime: 2023-08-10 14:13:38
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container>
        <component style="height: 250px;width:450px;" v-if="compRef" :is="compRef" :items="items" @rowClick="handleClick" :type="type" :highlightColors="highlightColors"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'single'
    },
    highlightColors: {
        type: Array,
        default: () => ['#1e80ff', '#4cc7f3', '#CDDC39']
    }
})

const compRef = shallowRef(null);

const items = Array(10).fill(0).map((item, index) => {
    return {
        label: `测试${index}`,
        value: index * 100
    }
})

const handleClick = (item, rowIndex) => {
    console.log(item, rowIndex);
}

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EScrollRankingBoard;
    })
});
</script>