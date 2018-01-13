var app = app || {};

(module => {
  const bookDetailsPage = {}
  bookDetailsPage.init = (book) => {
    $('#book-title').text(book.title)
    $('#book-author').text(`by ${book.author}`)
    $('#book-isbn').text(`ISBN: ${book.isbn}`)
    $('#book-image').attr('src', (book.image_url))
    $('#book-description').html(book.description)
    $('#book-detail-page').show()
  }
  module.bookDetailsPage = bookDetailsPage
})(app)