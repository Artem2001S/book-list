import booksResource from 'redux/api/booksInstance';

export function fetchBooks() {
  return booksResource.get('/').then(result => result.data);
}

export function deleteBook(id) {
  return booksResource.delete(`/${id}`);
}

export function addBook(book) {
  return booksResource.post('/', book);
}

export function updateBook(id, data) {
  return booksResource.put(`/${id}`, data);
}
