import { ref } from 'vue';

export function useModal() {
  const modalRef = ref<{ showModal: () => void; closeModal: () => void } | null>(null);

  const showModal = () => {
    if (modalRef.value) {
      modalRef.value.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.value) {
      modalRef.value.closeModal();
    }
  };

  return {
    modalRef,
    showModal,
    closeModal,
  };
}