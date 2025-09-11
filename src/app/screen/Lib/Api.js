export const config = {
  baseUrl: process.env.NEXT_PUBLIC_ENDPOINT,       // From env variable
  configKey: process.env.NEXT_PUBLIC_API,          // Bearer token
  endpoints: {
    home: "/home",
    backgroundApi: '/3/trending/all/day?language=en-US' // Specific endpoint for background data
  },
};