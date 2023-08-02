<template>
    <container>
        <component v-if="compRef" :is="compRef" :items="items" :columns="columns"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef } from 'vue';

defineProps({
    items: {
        type: Array,
        default: () => [
            { label: 'Tab1', value: 'tab1' },
            { label: 'Tab2', value: 'tab2' },
            { label: 'Tab3', value: 'tab3' },
        ]
    },
    columns: {
        type: Number,
        default: 3
    },
})

const compRef = shallowRef(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.ETab;
    })
});
</script>