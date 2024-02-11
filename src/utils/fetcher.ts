import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
