//do book list stuff here
var app = app || {};

(module => {

  const bookListPage = {}

  bookListPage.initIndexView = (books) => {
    $('#book-list').empty();
    books.forEach(book => {
      $('#book-list').append(`<li data-id="${book.book_id}">${book.title}</li>`)
    })
    $('#book-count').text('Total Books: ' + books.length);

    $('#book-list').on('click', 'li', (event) => {
      const id = $(event.target).data('id')
      page('/books/' + id)

    })
    $('#book-list-page').show()
  }

  module.bookListPage = bookListPage
})(app)