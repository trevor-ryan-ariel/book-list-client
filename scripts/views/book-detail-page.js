var app = app || {};

(module => {
  const bookDetailsPage = {}
  bookDetailsPage.init = (book) => {
    $('#book-title').text(book.title)
    $('#book-author').text(`by ${book.author}`)
    $('#book-isbn').text(`ISBN: ${book.isbn}`)
    $('#book-image').attr('src', book.image_url)
    $('#book-description').html(book.description)
    $('#delete').attr('data-id', book.book_id)
    $('#update').attr('data-id', book.book_id)
    $('#book-detail-page').show()
    $('.protected').hide()
    $('#update').on('click', app.bookUpdatePage.init)
    $('#delete').on('click', () => app.Book.destroy(book.book_id))
    $('#login').on('click', app.adminView.verify)
  }

  module.bookDetailsPage = bookDetailsPage
})(app)