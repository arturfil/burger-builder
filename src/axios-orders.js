import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-6dbc5.firebaseio.com/'
});

export default instance;