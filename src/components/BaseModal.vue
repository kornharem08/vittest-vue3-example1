<template>
  <Teleport to="body">
    <div
      v-if="isOpen(props.id)"
      class="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <slot></slot>
        <button @click="closeModal(props.id)" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from '../stores/modalStore';

// รับ id ของ modal เป็น prop
const props = defineProps<{
  id: string;
}>();

// ใช้ modal store
const modalStore = useModalStore();
const { isOpen, closeModal } = modalStore;
</script>