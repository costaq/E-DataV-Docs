<!--
 * @Autor: costa
 * @Date: 2023-08-02 11:15:24
 * @LastEditors: costa
 * @LastEditTime: 2023-08-04 10:57:17
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <container>
        <component v-if="compRef" :is="compRef" :items="items" :columns="columns"></component>
    </container>
</template>
<script setup>
import Container from './Container.vue';
import { onMounted, shallowRef, reactive } from 'vue';
import { h } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    columns: {
        type: Number,
        default: 3
    },
    showIcon: {
        type: Boolean,
        default: false
    }
})

const items = [
    { label: 'Tab1', value: 'tab1', icon: () => props.showIcon ? h(MailOutlined) : null },
    { label: 'Tab2', value: 'tab2', icon: () => props.showIcon?  h(AppstoreOutlined): null },
    { label: 'Tab3', value: 'tab3', icon: () => props.showIcon ? h(SettingOutlined): null },
]

const compRef = shallowRef(null);

onMounted(() => {
    import('e-datav-vue3').then((module) => {
        compRef.value = module.ETab;
    })
});
</script>