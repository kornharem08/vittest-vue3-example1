import { ref } from "vue";

// ประกาศ ref สำหรับ modal
let modalRef3 = ref<{ showModal: () => void } | null>(null);

// ฟังก์ชันสำหรับตั้งค่า modalRef3
export const setModalRef = (ref: typeof modalRef3) => {
  modalRef3 = ref;
};

// ฟังก์ชันสำหรับเปิด modal
export const openModalError = () => {
  if (modalRef3.value) {
    modalRef3.value.showModal();
  } else {
    console.error('Modal ref is not set.');
  }
};