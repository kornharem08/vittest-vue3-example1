<script setup lang="ts">
import BaseModal from './components/BaseModal.vue';
import { onMounted,  provide, ref } from 'vue';
import { setModalRef, openModalError } from './App.ts';

// // สร้าง ref สำหรับ modal
// const modalRef3 = ref<{ showModal: () => void } | null>(null);

// // ส่ง modalRef3 ไปยัง App.ts
// setModalRef(modalRef3);

// // Provide ฟังก์ชันเปิด modal
// provide('openErrorModal', () => {
//   openModalError();
// });
onMounted(() => {
  console.log('init !!!');
});
</script>

<template>
  <div class="p-4">
    <main>
      <RouterView />
    </main>
    <BaseModal id="modalRef3">
      <h2 class="text-xl font-bold">Modal Error</h2>
      <p>This is the content of Modal Error</p>
    </BaseModal>
  </div>
</template>