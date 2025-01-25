<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue';
</script>

<template>
    <div>
        test
        <BaseButton @emit2="console.log('emit2')"/>
    </div>
</template>