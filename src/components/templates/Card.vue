<script setup lang="ts"></script>

<template>
    <div class="card-container">
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-content {
    width: 23%;
    box-shadow: 0 0 10px 2px #ffcb89;
    border-radius: 15px;
    padding: 25px 10px;
}
</style>
