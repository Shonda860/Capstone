import axios from 'axios'
require('dotenv').config();

export default axios.create({
  baseURL: 'https://api.genius.com/',

  
});