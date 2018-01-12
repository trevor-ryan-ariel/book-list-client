


var app = app || {};

(module => {

  //const __API_URL__ = 'https://td-aa-rj-booklist.herokuapp.com'

  const __API_URL__ = 'http://localhost:3000/api/v1/books'

  function Book() {

  }

  Book.all = []

  Book.fetchAll = () => $.getJSON(__API_URL__)

  Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id)

  Book.create = book => {
    return $.post(__API_URL__, book).catch(err => console.log(err));
  }

  Book.update = book => {
    return $.ajax({
      url: __API_URL__ + '/' + book.book_id,
      method: 'PUT',
      data: book
    })
  }


  module.Book = Book

})(app)