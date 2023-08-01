<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #292b30;
    padding: 40px 0;
    border-radius: 8px;
}
</style>