var app = app || {};

(module => {

  const bookListView= {}

  const $view = $('#book-list-view')

  bookListView.init = (books) => {
    $('#book-list').empty()
    books.forEach(book => {
      $('#book-list').append(`<li>${book.title}</li> by ${book.author}:<img src="${book.image_url}"`)
    })
    $('#book-list').on('click', 'li', (event) => {
      const id = $(event.target).data('id')
      page('/books/' + id)
    })
    $view.show()
  };

  module.bookListView = bookListView

})(app)