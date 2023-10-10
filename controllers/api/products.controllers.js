const { Product } = require('../../models/Product')

const list = async (request, response) => {
  const products = await Product.findAll()

  response.json({ products })
}

const show = async (request, response) => {
  const product = await Product.findByPk(request.params.id)

  response.json(product)
}

const create = async (request, response) => {
  const { name, price } = request.body

  const product = Product.build({ name, price })

  await product.save()

  response.status(201)
  response.json({ product })
}

const uptade = async (request, response) => {
  try {
    const { id } = request.params
    const {name, price} = request.body

    const product = await Product.findOne({ where: { id } })

    if(!product){
      response.status(401).json({message: "Nenhum produto encontrado" })
  }else{
    const product = await Product.update({ name, price },{ where: { id } })

    response.status(200).json({ message:'Atualizado com sucesso' })
  }

  } catch (error) {
    response.status(400).json({ error })
  }

}


const remove = async (request, response) => {
  const { id } = request.body

  const product = await Product.findByPk(id)
  await product.destroy()

  response.status(200)
  response.json({ product })
}


module.exports = {
  list,
  show,
  uptade,
  create,
  remove,
}
