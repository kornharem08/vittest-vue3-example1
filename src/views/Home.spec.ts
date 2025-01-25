import { useModalStore } from '../stores/modalStore';
import { setActivePinia, createPinia } from 'pinia';
import { openModal } from './HomeView';

describe('useModalStore', () => {
  // Initialize Pinia before each test
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it('should open a modal by id', () => {
    const modalStore = useModalStore();
    const modalId = 'modal1';

    // Initially, the modal should be closed
    expect(modalStore.isOpen(modalId)).toBe(false);

    // Open the modal
    openModal(modalId);

    // After opening, the modal should be open
    expect(modalStore.isOpen(modalId)).toBe(true);
  });

  it('should close a modal by id', () => {
    const modalStore = useModalStore();
    const modalId = 'modal1';

    // Open the modal first
    openModal(modalId);
    expect(modalStore.isOpen(modalId)).toBe(true);

    // Close the modal
    modalStore.closeModal(modalId);

    // After closing, the modal should be closed
    expect(modalStore.isOpen(modalId)).toBe(false);
  });

  it('should handle multiple modals independently', () => {
    const modalStore = useModalStore();
    const modal1Id = 'modal1';
    const modal2Id = 'modal2';

    // Open modal1
    openModal(modal1Id);
    expect(modalStore.isOpen(modal1Id)).toBe(true);
    expect(modalStore.isOpen(modal2Id)).toBe(false);

    // Open modal2
    openModal(modal2Id);
    expect(modalStore.isOpen(modal1Id)).toBe(true);
    expect(modalStore.isOpen(modal2Id)).toBe(true);

    // Close modal1
    modalStore.closeModal(modal1Id);
    expect(modalStore.isOpen(modal1Id)).toBe(false);
    expect(modalStore.isOpen(modal2Id)).toBe(true);
  });
});