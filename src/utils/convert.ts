export function B() {
  console.log('B called'); // Add this line
  return 'Real implementation of B';
}

export async function fetchData(url: string): Promise<{ data: any; success: boolean }> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}