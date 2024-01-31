import axios, { AxiosRequestConfig } from 'axios'
import { User, Album, Photo } from '../utils/types'

// Base URL for the API
const baseURL = 'https://jsonplaceholder.typicode.com'

/**
 * api
 *
 * A generic API utility function for making HTTP requests using axios. It is designed to be versatile
 * and can handle various types of responses by using TypeScript generics.
 *
 * Type Parameter:
 *  - T: The expected type of the response data. It defaults to an array of User, Album, or Photo.
 *
 * Parameters:
 *  - config: The configuration object for the axios request, conforming to AxiosRequestConfig.
 *
 * Returns:
 *  - A promise that resolves to the response data typed as T.
 *
 * Usage:
 *  const users = await api<User[]>({ url: '/users' });
 *  const albums = await api<Album[]>({ url: '/albums' });
 */
const api = async <T = User[] | Album[] | Photo[]>(
  config: AxiosRequestConfig,
): Promise<T> => {
  try {
    // Make the HTTP request using axios with the provided config and baseURL
    const response = await axios({ ...config, baseURL })

    // Return the response data, typed as T
    return response.data as T
  } catch (error) {
    // Handle errors from axios requests
    if (axios.isAxiosError(error)) {
      // Extract and throw the error message from the axios error object
      const errMessage = error.response?.data?.message || error.message
      throw new Error(errMessage)
    }
    // Handle any other errors that might occur
    throw new Error('An unknown error occurred')
  }
}

export default api
