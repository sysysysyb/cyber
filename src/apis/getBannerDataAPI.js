import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export async function getBannerData(productId) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`[getBannerData] Error : `, error);
    throw error;
  }
}
