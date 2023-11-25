import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '21698474-fb36d7b3400c91ab3d227d6db'

export const per_page = 40

export const fetchImages = async (query = '', page = 1) => {
  const params = new URLSearchParams({
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page,
    page
  })
  try {
    const responce = await axios.get(`${BASE_URL}?key=${API_KEY}&${params}`)
    return responce.data
  }
  catch (err) {
    console.log(err)
    throw new Error(err)
  }
}