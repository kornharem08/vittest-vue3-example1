<template>
    <div
      ref="modalElement"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 hidden"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <slot></slot>
        <button @click="closeModal" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const modalElement = ref<HTMLElement | null>(null);
  
  const showModal = () => {
    if (modalElement.value) {
      modalElement.value.classList.remove('hidden');
    }
  };
  
  const closeModal = () => {
    if (modalElement.value) {
      modalElement.value.classList.add('hidden');
    }
  };
  
  defineExpose({
    showModal,
    closeModal,
  });
  </script>