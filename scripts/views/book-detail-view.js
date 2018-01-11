var app = app || {};

(module => { 

  const bookDetailView= {}

  const $view = $('#book-detail-view')

  bookDetailView.init = (book) => {
    $('.page').hide()
    $view.append(`<h1>${book.title}</h1>`)
    $view.show()
  }

  module.bookDetailView = bookDetailView

})(app)