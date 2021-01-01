import axios from 'axios';

const KEY = 'AIzaSyAEc76JT7HEsgdmTF47RRhQAzf0UP45vEE';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});