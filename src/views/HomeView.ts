import router from "../router/routes";
import { useModalStore } from "../stores/modalStore";



export const openModal = (id: string) => {
  const modalStore = useModalStore();
  const { showModal } = modalStore;
  showModal(id); // เปิด modal ด้วย id
};

export const navigateToAbout = () => {
  console.log('Navigate to about page');
  router.push('/about');
}