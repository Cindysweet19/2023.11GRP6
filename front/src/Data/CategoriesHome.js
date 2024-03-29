import axios from 'axios';  

export const CategoriesHome = async () => {
  let response = await axios.get('http://localhost:3001/api/categoria')
  return response.data;
}