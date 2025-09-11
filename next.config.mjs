/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_ENDPOINT: "https://api.themoviedb.org",
        NEXT_PUBLIC_API:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjNmODE2YWM4MDhlYjljYmY0MzE0ZTNhM2FlMmQ1NCIsIm5iZiI6MTc1NjgwMzUwMS4zMjcwMDAxLCJzdWIiOiI2OGI2YjFhZDhkMjAwMGQzNTczY2RhNjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u70fJLHFp2lcM_EqkPQi0Xr9KlAf4qIf0yIpXtOkWGs"
    }
};

export default nextConfig;
