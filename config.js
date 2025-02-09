const config = {
    apiBaseUrl: process.env.NODE_ENV === 'production' 
        ? 'https://your-backend-service.onrender.com'
        : 'http://localhost:3000'
};