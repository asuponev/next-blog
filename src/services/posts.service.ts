import { IPost } from '@/types/posts.interface'
import axios from 'axios'

const API_URL = 'https://cloud.codesupply.co/endpoint/react/data.json'

export const getPosts = async () => {
  const { data } = await axios.get<IPost[]>(API_URL)
  return data
}
