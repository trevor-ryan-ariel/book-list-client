// page('/*', ()) //do something to all
// $(document).ready = () => {      can use if you want
// }

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
  app.Book.fetchAll().then(books => {
    app.bookListPage.initIndexView(books)
  })
})

page('/books/:id', (ctx) => {
  app.Book.fetchOne(ctx.params.id).then(book =>
    app.bookDetailsPage.init(book))
})

page('/books/new', () => {
  app.bookCreateView.init()
});

page('error', () => {
  $('#error-page').show()
})

page.start();