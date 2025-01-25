import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    modals: {} as Record<string, boolean>, // เก็บสถานะของ modal ต่างๆ
  }),
  actions: {
    // เปิด modal โดยใช้ id
    showModal(id: string) {
      this.modals[id] = true;
    },
    // ปิด modal โดยใช้ id
    closeModal(id: string) {
      this.modals[id] = false;
    },
    // ตรวจสอบว่า modal เปิดอยู่หรือไม่
    isOpen(id: string) {
      return !!this.modals[id];
    },
  },
});