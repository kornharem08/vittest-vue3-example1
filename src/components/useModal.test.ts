import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseModal from './BaseModal.vue';

describe('BaseModal', () => {
  it('should show and hide the modal when showModal and closeModal are called', async () => {
    // Mount the component
    const wrapper = mount(BaseModal);

    // ตรวจสอบว่า Modal ถูกซ่อนอยู่ (มี class hidden)
    expect(wrapper.find('.fixed').classes()).toContain('hidden');

    // เรียก showModal เพื่อแสดง Modal
    await wrapper.vm.showModal();
    expect(wrapper.find('.fixed').classes()).not.toContain('hidden');

    // เรียก closeModal เพื่อซ่อน Modal
    await wrapper.vm.closeModal();
    expect(wrapper.find('.fixed').classes()).toContain('hidden');
  });

  it('should emit close event when close button is clicked', async () => {
    // Mount the component
    const wrapper = mount(BaseModal);

    // เรียก showModal เพื่อแสดง Modal
    await wrapper.vm.showModal();

    // คลิกปุ่ม Close
    await wrapper.find('button').trigger('click');

    // ตรวจสอบว่า Modal ถูกซ่อน
    expect(wrapper.find('.fixed').classes()).toContain('hidden');
  });
});