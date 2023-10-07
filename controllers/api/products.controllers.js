const { Product } = require('../../models/Product')


const listController = async (request, response) => {
  const products = await Product.findAll()

  console.log(products)

  response.json({ products: products })
}

const createController = async (request, response) => {
  const { name, price } = request.body

  const product = Product.build({ name, price })

  await product.save()

  response.status(201)
  response.json({ product })
}


const removeController = async (request, response) => {
  const { id } = request.body

  const product = await Product.findByPk(id)
  await product.destroy()

  response.status(200)
  response.json({ product })
}


module.exports = {
  listController,
  createController,
  removeController,
}
