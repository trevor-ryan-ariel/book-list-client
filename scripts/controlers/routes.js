
page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
  app.Book.fetchAll().then(books => {
    app.bookListPage.initIndexView(books)
  })
})

page('/books/new', () => {
  app.bookCreatePage.init()
})

page('/admin', () => {
  app.adminView.initAdminPage()
})

page('/books/:id', (ctx) => {
  app.Book.fetchOne(ctx.params.id).then(book =>
    app.bookDetailsPage.init(book))
})

page('error', () => {
  $('#error-page').show()
})

page.start();