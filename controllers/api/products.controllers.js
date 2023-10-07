const   listController = (request, response) => {
  response.json({ products: [] })
}

module.exports = {
  listController,
}
