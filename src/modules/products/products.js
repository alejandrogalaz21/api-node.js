import { generateProducts } from './productsGenerator'

/**
 * Represents a collection of products.
 */
export class Products {
  /**
   * Creates a new Products instance.
   * @param {Array} products - An array of products to initialize the instance with (optional).
   */
  constructor(products = []) {
    this.products = products
  }

  /**
   * Generates random product data using the productsGenerator module.
   * @param {number} quantity - The number of products to generate (default: 100).
   * @returns {Array} An array of generated products.
   */
  generateRandomData(quantity = 100) {
    const products = generateProducts(quantity)
    if (this.products.length !== 0) {
      this.products = this.products.concat(products)
    } else {
      this.products = products
    }
    return this.products
  }

  /**
   * Returns all products in the collection.
   * @returns {Array} An array of products.
   */
  getProducts() {
    return this.products
  }

  /**
   * Finds a product in the collection by ID.
   * @param {string} id - The ID of the product to find.
   * @returns {object} The product object, or undefined if not found.
   */
  getProductById(id) {
    return this.products.find(product => product.id === id)
  }

  /**
   * Adds a new product to the collection.
   * @param {string} name - The name of the product.
   * @param {number} price - The price of the product.
   * @param {string} color - The color of the product.
   * @param {string} category - The category of the product.
   * @param {string} description - The description of the product.
   * @param {string} image - The URL of the product image.
   * @returns {Array} An array of all products after the new product has been added.
   */
  addProduct(name, price, color, category, description, image) {
    const newProduct = {
      id: uuidv4(),
      name,
      price,
      color,
      category,
      description,
      image,
      votes: 0
    }
    this.products.push(newProduct)
    return this.products
  }

  /**
   * Removes a product from the collection by ID.
   * @param {string} id - The ID of the product to remove.
   * @returns {Array} An array of all products after the specified product has been removed.
   */
  removeProduct(id) {
    this.products = this.products.filter(product => product.id !== id)
    return this.products
  }

  /**
   * Renames a product in the collection by ID.
   * @param {string} id - The ID of the product to rename.
   * @param {string} newName - The new name of the product.
   * @returns {Array} An array of all products after the specified product has been renamed.
   */
  renameProduct(id, newName) {
    this.products = this.products.map(product => {
      if (product.id === id) {
        product.name = newName
      }
      return product
    })
    return this.products
  }
}
