import { setActivePinia, createPinia } from 'pinia';
import { useModalStore } from './modalStore';
import { describe, it, expect, beforeEach } from 'vitest';

describe('modalStore', () => {
  beforeEach(() => {
    // สร้าง Pinia instance ใหม่ก่อนแต่ละ test
    setActivePinia(createPinia());
  });

  it('should open and close modal', () => {
    const modalStore = useModalStore();

    // เปิด modal ด้วย id 'modal1'
    modalStore.showModal('modal1');
    expect(modalStore.isOpen('modal1')).toBe(true);

    // ปิด modal ด้วย id 'modal1'
    modalStore.closeModal('modal1');
    expect(modalStore.isOpen('modal1')).toBe(false);
  });

  it('should handle multiple modals', () => {
    const modalStore = useModalStore();

    // เปิด modal1 และ modal2
    modalStore.showModal('modal1');
    modalStore.showModal('modal2');
    expect(modalStore.isOpen('modal1')).toBe(true);
    expect(modalStore.isOpen('modal2')).toBe(true);

    // ปิด modal1
    modalStore.closeModal('modal1');
    expect(modalStore.isOpen('modal1')).toBe(false);
    expect(modalStore.isOpen('modal2')).toBe(true);
  });
});