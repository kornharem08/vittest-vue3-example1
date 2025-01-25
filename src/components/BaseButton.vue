<template>
    <div>
        <button  @click="emit2()" type="button" class="bg-blue-500 px-4 py-4 ">Default</button>
    </div>
  </template>
  
  <script setup lang="ts">
import { emit2 } from './BaseButton';
  </script>