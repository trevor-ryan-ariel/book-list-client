var app = app || {};

(module => {

  const bookUpdatePage= {}

  const $view = $('#book-update-page')

  bookUpdatePage.init = () => {
    $view.show();
  }

  $('#update-submit').on('click', app.Book.update)

  module.bookUpdatePage = bookUpdatePage

})(app)