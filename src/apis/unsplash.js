//configuration of axios
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID A6S-A2RplXWZSEG7tSad8sREkJ60t3n71eZPM4b1FQo'
    }
});

