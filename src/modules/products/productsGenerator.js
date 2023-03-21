import { v4 as uuid } from 'uuid'
import { faker } from '@faker-js/faker'

/**
 * Generate a product object.
 *
 * @param {string} [name=null] - The name of the product.
 * @param {string} [price=null] - The price of the product.
 * @param {string} [color=null] - The color of the product.
 * @param {string} [category=null] - The category of the product.
 * @param {string} [description=null] - The description of the product.
 * @param {string} [image=null] - The image URL of the product.
 * @param {number} [stock=0] - The Quantity in Stock of the product.
 * @returns {Object} - A product object.
 */
export function generateProduct(
  name = null,
  price = null,
  color = null,
  category = null,
  description = null,
  image = null,
  stock = 0
) {
  return {
    id: uuid(),
    name: name || faker.commerce.product(),
    price: price || parseFloat(faker.commerce.price()),
    color: color || faker.color.human(),
    category: category || faker.commerce.department(),
    description: description || faker.commerce.productDescription(),
    image: image || faker.image.business(),
    stock: stock || faker.datatype.number({ min: 1, max: 1000 })
  }
}

/**
 * Generates an array of product objects with random values for their properties
 * @param {number} numProducts - The number of products to generate
 * @returns {object[]} - An array of product objects, each with properties name, price, color, category, description, image, and id (generated using uuid).
 */
export function generateProducts(numProducts) {
  const products = []

  for (let i = 0; i < numProducts; i++) {
    const product = generateProduct()
    products.push(product)
  }

  return products
}
