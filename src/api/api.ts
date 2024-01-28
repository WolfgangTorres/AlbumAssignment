import axios, { AxiosRequestConfig } from 'axios'
import { User, Album, Photo } from '../utils/interfaces'

const baseURL = 'https://jsonplaceholder.typicode.com'

const api = async <T = User[] | Album[] | Photo[]>(
  config: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await axios({ ...config, baseURL })

    return response.data as T
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios error
      const errMessage = error.response?.data?.message || error.message
      throw new Error(errMessage)
    }
    // Handle other errors
    throw new Error('An unknown error occurred')
  }
}

export default api
