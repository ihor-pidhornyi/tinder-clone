import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tinder-backend-pet.herokuapp.com'
})

export default instance;