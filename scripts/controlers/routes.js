// page('/*', ()) //do something to all
// $(document).ready = () => {      can use if you want
// }

page('/', () => {
    $('.page').hide()
    app.Book.fetchAll().then(books => {
        app.bookListPage.initIndexView(books)
    })
})

page('/books/:id', (ctx) => {
    $('.page').hide()

    app.Book.fetchOne(ctx.params.id).then(book => console.log(book))
    
    $('#book-detail-page').show()
})

page('/books/create', () => {
    $('.page').hide()
    $('#book-create-page').show()
})

page('error', () => {
    $('.page').hide()
    $('#error-page').show()
})

page.start();