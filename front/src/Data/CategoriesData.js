import axios from 'axios';  

export const CategoriesData = async () => {
  let response = await axios.get('http://localhost:3001/api/categoria')
  return response.data;
}