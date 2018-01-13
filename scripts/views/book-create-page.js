var app = app || {};

(module => {

  const bookCreatePage= {}

  const $view = $('#book-create-page')

  bookCreatePage.init = () => {
    $view.show();
  }

  //$('#book-create').on('click', app.Book.create)

  module.bookCreatePage = bookCreatePage

})(app)