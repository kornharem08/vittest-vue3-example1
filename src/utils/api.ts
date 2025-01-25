import { B, fetchData } from './convert';
import { useModal } from '../components/useModal';
// src/utils/api.ts
export async function A(url: string) {
  const resultFromB = B();
  const fetchResult = await fetchData(url); // ใช้ URL ที่ส่งเข้ามา
  return `A called B and got: ${resultFromB}, and fetchData returned: ${JSON.stringify(
    fetchResult.data
  )} with success: ${fetchResult.success}`;
}

export async function C(url: string) {
  const resultFromB = B();
  const resultFromD = D()
  const fetchResult = await fetchData(url); // ใช้ URL ที่ส่งเข้ามา
  return `C called B and got: ${resultFromB}, and fetchData returned: ${JSON.stringify(
    fetchResult.data
  )} with success: ${fetchResult.success} ${resultFromD}`;
}

export function D() {
  console.log('D called'); // Add this line
  const { showModal } = useModal(); // เรียกใช้ useModal และดึง showModal
  showModal(); // เรียกใช้ showModal
  return 'Real implementation of D';
}