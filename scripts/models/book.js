


var app = app || {};

(module => {

  //const __API_URL__ = 'https://td-aa-rj-booklist.herokuapp.com'

  const __API_URL__ = 'http://localhost:3000/api/v1/books'

  function Book() {}

  Book.all = []

  Book.fetchAll = () => $.getJSON(__API_URL__)

  Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id)

  function NewBook () {
  }

  Book.create = event => {
    event.preventDefault();
    let newBook = new NewBook ({
      title: $('#create-title').val(),
      author: $('#create-author').val(),
      image_url: $('#create-url').val(),
      isbn: $('#create-isbn').val(),
      description: $('#create-description').val()
    })

    return $.post(__API_URL__, newBook).catch(err => console.log(err));
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