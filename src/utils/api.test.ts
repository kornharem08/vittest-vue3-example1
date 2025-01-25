import { describe, it, expect, vi, beforeEach } from 'vitest';
import { A, C, D } from './api'; // Import A, C, D
import * as fetchData from './convert'; // Import fetchData
import { useModal } from '../components/useModal'; // Import useModal
import { ref } from 'vue';

// Mock ทั้งโมดูล convert.ts
vi.mock('./convert', async (importOriginal) => {
  const originalModule = await importOriginal() as typeof import('./convert'); // ระบุประเภทของ originalModule
  return {
    ...originalModule, // ใช้ implementation จริงสำหรับทุกฟังก์ชัน
    fetchData: vi.fn(), // Mock เฉพาะ fetchData
    B: vi.fn(), // Mock B ด้วย vi.fn()
  };
});

// Mock useModal
vi.mock('../components/useModal', () => ({
  useModal: vi.fn(() => ({
    showModal: vi.fn(), // Mock showModal
  })),
}));

describe('A and C functions', () => {
  // รีเซ็ต mocked functions ก่อนการรันแต่ละ test case
  beforeEach(() => {
    vi.restoreAllMocks(); // หรือใช้ vi.resetAllMocks() หากต้องการรีเซ็ตแต่ไม่คืนค่า implementation จริง
  });

  it('should return correct result for A with mocked B and fetchData', async () => {
    // Mock fetchData สำหรับ A
    vi.mocked(fetchData.fetchData).mockResolvedValueOnce({
      data: { data: [] },
      success: true,
    });

    // Mock B
    vi.mocked(fetchData.B).mockReturnValue('Mocked implementation of B');

    // เรียก function A พร้อม URL
    const resultA = await A('https://example.com/api/data-for-a');
    expect(resultA).toBe(
      'A called B and got: Mocked implementation of B, and fetchData returned: {"data":[]} with success: true'
    );
  });

  it('should return correct result for C with mocked fetchData but real B and D', async () => {
    // Mock fetchData สำหรับ C
    vi.mocked(fetchData.fetchData).mockResolvedValueOnce({
      data: { data: [1, 2, 3] },
      success: true,
    });

    // Mock B
    vi.mocked(fetchData.B).mockReturnValue('Real implementation of B');

    // เรียก function C พร้อม URL
    const resultC = await C('https://example.com/api/data-for-c');
    expect(resultC).toBe(
      'C called B and got: Real implementation of B, and fetchData returned: {"data":[1,2,3]} with success: true Real implementation of D'
    );
  });

  describe('D function', () => {
    it('should call showModal and return correct value', () => {
      // Mock useModal และ showModal
      const mockShowModal = vi.fn();
      vi.mocked(useModal).mockReturnValue({
        modalRef: ref(null), // Mock modalRef
        showModal: mockShowModal, // Mock showModal
        closeModal: vi.fn(), // Mock closeModal
      });

      // เรียก function D
      const result = D();

      // ตรวจสอบว่า showModal ถูกเรียก
      expect(mockShowModal).toHaveBeenCalled();

      // ตรวจสอบว่าผลลัพธ์ที่ได้ถูกต้อง
      expect(result).toBe('Real implementation of D');
    });
  });
});