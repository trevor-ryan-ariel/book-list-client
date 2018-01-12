var app = app || {};

(module => {

  const bookCreatePage= {}

  const $view = $('#book-create-page')

  bookCreatePage.init = () => {
    $view.show();
  }
  module.bookCreatePage = bookCreatePage

})(app)