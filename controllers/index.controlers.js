const homeController = (request, response, next) => {
  response.render('index', { title: 'Express' })
}

const aboutController = (request, response, next) => {
  response.render('index', { title: 'About' })
}

module.exports = {
  homeController,
  aboutController,
}
