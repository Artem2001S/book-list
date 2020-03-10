import axios from 'axios';

export default axios.create({
  baseURL: 'https://json-server-book-list.herokuapp.com/books',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});
