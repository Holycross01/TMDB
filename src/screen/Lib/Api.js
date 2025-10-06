import axios from 'axios';

export const config = {
  baseUrl: process.env.NEXT_PUBLIC_ENDPOINT,       // From env variable
  token: process.env.NEXT_API_TOKEN,          // Bearer token
  endpoints: {
    home: "/home",
    backgroundApi: '/3/trending/all/day?language=en-US', // Specific endpoint for background data
    today: '/3/movie/now_playing',
    weekly: '/3/tv/on_the_air',
    trailers:'/3/trending/tv/day',
    popular:'/3/tv/popular',
    streaming:'/3/tv/top_rated',
    OnTv:'/3/tv/airing_today',
    forrent:'/3/tv/on_the_air',
    intheaters:'/3/trending/tv/day',
    popularstream:'/3/trending/tv/day',
    popularontv:'/3/trending/all/day?language=en-US',
    popularforent:'/3/tv/top_rated',
    popularintheaters:'/3/trending/tv/day',
    freetowatchmovie:'/3/discover/tv',
    freetowatchtv:'/3/discover/movie',
    popularpageformovies: '/3/movie/popular',
    popularpagefortvshows:'/3/discover/tv',
    popularpageforpeople:'/3/person/popular',
    movieDetails: '/3/movie',
    moviecast:'/3/movie/',
    movierecommendations: '/3/movie/',
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


// console.log("Endpoint:", process.env.NEXT_PUBLIC_ENDPOINT);
// console.log("Token exists?", !!process.env.NEXT_API_TOKEN);