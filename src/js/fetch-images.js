import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const AUTH_TOKEN = '38070331-ce3e1419da869fa0ec2ab58f7';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${AUTH_TOKEN}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
