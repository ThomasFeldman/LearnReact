import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CrM2fFC3OcHfuGTJnXRPfeQhgmDUIV9qjNb9AGu6YeE'
    }
 });