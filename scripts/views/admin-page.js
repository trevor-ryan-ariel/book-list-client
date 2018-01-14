var app = app || {};

(module => {

  const adminView = {}

  const $view = $('#admin-page')

  adminView.verify = () => {
    let pass = $('#pass').val()

    if (pass === '1234'){
      $('.protected').show()
    }
  }

  adminView.initAdminPage = () => $view.show()

  module.adminView = adminView

})(app)