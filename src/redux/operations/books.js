import { normalize } from 'normalizr';
import booksResource from 'redux/api/booksInstance';
import { bookListSchema } from 'redux/schemas';

export function fetchBooks() {
  return booksResource
    .get('/')
    .then(result => normalize(result.data, bookListSchema));
}

export function deleteBook(id) {
  return booksResource.delete(`/${id}`);
}

export function addBook(book) {
  return booksResource.post('/', book);
}

export function updateBook(id, data) {
  console.log('update to server');

  return booksResource.put(`/${id}`, data);
}
