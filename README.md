ในการเขียนทดสอบด้วย vitest เราสามารถใช้ mock data และ mock function เพื่อจำลองข้อมูลและฟังก์ชันที่ใช้ในการทดสอบได้ ซึ่งช่วยให้เราสามารถทดสอบโค้ดได้โดยไม่ต้องพึ่งพาข้อมูลจริงหรือฟังก์ชันจริงที่อาจจะซับซ้อนหรือมีผลข้างเคียง

1. การสร้าง Mock Data
Mock Data คือข้อมูลที่เราสร้างขึ้นมาเพื่อใช้ในการทดสอบแทนข้อมูลจริง เราสามารถสร้าง mock data ได้โดยตรงในไฟล์ทดสอบหรือนำเข้าจากไฟล์อื่น

ตัวอย่างการสร้าง Mock Data
javascript
Copy
// mockData.js
export const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

export const mockProducts = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 200 },
];
ในไฟล์ทดสอบ เราสามารถนำเข้า mock data เหล่านี้มาใช้ได้:

javascript
Copy
import { mockUsers, mockProducts } from './mockData';

test('should return correct user data', () => {
  expect(mockUsers[0].name).toBe('John Doe');
});

test('should return correct product data', () => {
  expect(mockProducts[1].price).toBe(200);
});
2. การสร้าง Mock Function
Mock Function คือฟังก์ชันที่เราสร้างขึ้นเพื่อจำลองการทำงานของฟังก์ชันจริง เราสามารถใช้ vi.fn() จาก vitest เพื่อสร้าง mock function ได้

ตัวอย่างการสร้าง Mock Function
javascript
Copy
import { vi } from 'vitest';

// สร้าง mock function
const mockFetchUser = vi.fn((userId) => {
  return Promise.resolve({
    id: userId,
    name: 'Mock User',
    email: 'mock@example.com',
  });
});

test('should return mock user data', async () => {
  const user = await mockFetchUser(1);
  expect(user.name).toBe('Mock User');
});
3. การ Mock ฟังก์ชันจาก Module อื่น
บางครั้งเราอาจต้องการ mock ฟังก์ชันที่อยู่ใน module อื่น เพื่อไม่ให้มีการเรียกใช้งานฟังก์ชันจริงในระหว่างการทดสอบ

ตัวอย่างการ Mock ฟังก์ชันจาก Module อื่น
javascript
Copy
// api.js
export const fetchUser = (userId) => {
  // เรียก API จริง
  return fetch(`/users/${userId}`).then((response) => response.json());
};

// ในไฟล์ทดสอบ
import { vi } from 'vitest';
import { fetchUser } from './api';

// Mock ฟังก์ชัน fetchUser
vi.mock('./api', () => ({
  fetchUser: vi.fn((userId) => {
    return Promise.resolve({
      id: userId,
      name: 'Mocked User',
      email: 'mocked@example.com',
    });
  }),
}));

test('should return mocked user data', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe('Mocked User');
});
4. การใช้ Mock Implementation
เราสามารถกำหนดการทำงานของ mock function ได้โดยใช้ mockImplementation

ตัวอย่างการใช้ Mock Implementation
javascript
Copy
const mockAdd = vi.fn();

mockAdd.mockImplementation((a, b) => a + b);

test('should add two numbers', () => {
  expect(mockAdd(1, 2)).toBe(3);
});
5. การตรวจสอบการเรียกใช้ Mock Function
เราสามารถตรวจสอบได้ว่า mock function ถูกเรียกกี่ครั้ง และถูกเรียกด้วย argument อะไรบ้าง

ตัวอย่างการตรวจสอบการเรียกใช้ Mock Function
javascript
Copy
const mockLog = vi.fn();

mockLog('Hello');
mockLog('World');

test('should call mockLog twice', () => {
  expect(mockLog).toHaveBeenCalledTimes(2);
  expect(mockLog).toHaveBeenCalledWith('Hello');
  expect(mockLog).toHaveBeenCalledWith('World');
});
6. การ Reset Mock Function
หลังจากที่ทดสอบเสร็จแล้ว เราสามารถ reset mock function เพื่อล้างข้อมูลการเรียกใช้ทั้งหมดได้

ตัวอย่างการ Reset Mock Function
javascript
Copy
const mockLog = vi.fn();

mockLog('Hello');
mockLog('World');

mockLog.mockReset();

test('should reset mockLog', () => {
  expect(mockLog).toHaveBeenCalledTimes(0);
});
สรุป
Mock Data: ใช้สำหรับสร้างข้อมูลจำลองเพื่อทดสอบ

Mock Function: ใช้สำหรับสร้างฟังก์ชันจำลองเพื่อทดสอบการทำงานของโค้ด

vi.fn(): ใช้สำหรับสร้าง mock function

vi.mock(): ใช้สำหรับ mock ฟังก์ชันจาก module อื่น

mockImplementation: ใช้สำหรับกำหนดการทำงานของ mock function

toHaveBeenCalledTimes, toHaveBeenCalledWith: ใช้สำหรับตรวจสอบการเรียกใช้ mock function

mockReset: ใช้สำหรับ reset mock function

การใช้ mock data และ mock function ช่วยให้เราสามารถทดสอบโค้ดได้อย่างมีประสิทธิภาพ โดยไม่ต้องพึ่งพาข้อมูลหรือฟังก์ชันจริงที่อาจจะซับซ้อนหรือมีผลข้างเคียง
