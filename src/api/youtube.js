import axios from 'axios'
require('dotenv').config();

export default axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: 'https://backend-dot-delta-cosmos-283205.wl.r.appspot.com',

});
