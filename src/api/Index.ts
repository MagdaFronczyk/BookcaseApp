import axios from 'axios';

export const X_API_KEY_NYT = 'yqdlzuRtwxf9XHOFl7GPRUEs7qF0nguA';

export enum API_URL {
  NYT = 'https://api.nytimes.com/svc/books/v3',
}

export const NYT_API_AXIOS_INSTANCE = axios.create({
  baseURL: API_URL.NYT,
  headers: {
    'X-Api-Key': X_API_KEY_NYT,
    'Content-Type': 'multipart/form-data',
  },
});