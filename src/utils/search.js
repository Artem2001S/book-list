export function searchByBookTitleAndAutors(bookList, searchValue) {
  return bookList.filter(
    book =>
      book.authors.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.bookTitle.toLowerCase().includes(searchValue.toLowerCase())
  );
}
