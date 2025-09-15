import axios from 'axios';

export const config = {
  baseUrl: process.env.NEXT_PUBLIC_ENDPOINT,       // From env variable
  token: process.env.NEXT_API_TOKEN,          // Bearer token
  endpoints: {
    home: "/home",
    backgroundApi: '/3/trending/all/day?language=en-US', // Specific endpoint for background data
    today: '/3/movie/now_playing',
    weekly: '/3/tv/on_the_air'
  },
};



export const tmdbApi = axios.create({
  baseURL: config.baseUrl,
})

tmdbApi.interceptors.request.use(
  async (requestConfig) => {
    try {
      requestConfig.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${config.token}`,
        'Content-Type': 'application/json',
      };
    } catch (error) {
      console.log('Error adding token:', error);
    }
    return requestConfig;
  },
  (error) => Promise.reject(error)
);
