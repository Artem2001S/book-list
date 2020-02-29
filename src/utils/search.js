export function searchByBookTitleAndAutors(bookList, searchValue) {
  return bookList.filter(
    book =>
      book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.bookTitle.toLowerCase().includes(searchValue.toLowerCase())
  );
}
