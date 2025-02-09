const config = {
    apiBaseUrl: process.env.NODE_ENV === 'production' 
        ? 'https://careconnbackend.onrender.com'
        : 'http://localhost:3000'
        //https://your-backend-service.onrender.com
};