import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-e79ed.firebaseio.com/'
});

export default instance;