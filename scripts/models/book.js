var app = app || {};

(module => {

  //const __API_URL__ = 'https://td-aa-rj-booklist.herokuapp.com'

  const __API_URL__ = 'http://localhost:3000/api/v1/books'

  function Book(newBook) {
    Object.keys(newBook).forEach(key => this[key] = newBook[key])
  }

  Book.all = []

  Book.fetchAll = () => $.getJSON(__API_URL__)

  Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id)

  Book.create = event => {
    var addBook = new Book({
      title: $('#create-title').val(),
      author: $('#create-author').val(),
      image_url: $('#create-url').val(),
      isbn: $('#create-isbn').val(),
      description: $('#create-description').val()
    })
    event.preventDefault();
    return $.post(__API_URL__, addBook).catch(err => console.log(err));
  }

  Book.update = event => {
    var updateBook = new Book({

      title: $('#update-title').val(),
      author: $('#update-author').val(),
      image_url: $('#update-url').val(),
      isbn: $('#update-isbn').val(),
      description: $('#update-description').val(),
      book_id: parseInt($('#update').data('id'))
    })
    event.preventDefault();
    return $.ajax({
      url: __API_URL__ + '/' + event.book_id,
      method: 'PUT',
      data: updateBook
    })
      .then(status => console.log(status))
      .catch(err => console.log(err));
  }

  Book.destroy = id => {
    console.log(id)
    return $.ajax({
      url: __API_URL__ + '/' + id,
      method: 'DELETE',
    })
      .then(() => console.log('deleted'))
      .catch(err => console.log(err));
  }

  module.Book = Book

})(app)