<template>
    <container>
        <component style="height: 200px;width:200px;" v-if="compRef" :is="compRef" :value="value"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, ref } from 'vue';

defineProps({
    value: {
        type: Number,
        default: 56
    },
})

const compRef = shallowRef(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
      compRef.value = module.EWaterLevelPond;
    })
});
</script>