//do book list stuff here
var app = app || {};

(module => {

  const bookListPage = {}

  bookListPage.initIndexView = (books) => {
    $('#book-list').empty();
    books.forEach(book => {
      $('#book-list').append(`<div><p data-id="${book.book_id}">${book.title} by ${book.author}</p><img src="${book.image_url}"></div>`)
    })
    $('#book-count').text('Total Books: ' + books.length);

    $('#book-list').on('click', 'p', (event) => {
      const id = $(event.target).data('id')
      page('/books/' + id)

    })
    $('#book-list-page').show()
  }

  module.bookListPage = bookListPage
})(app)