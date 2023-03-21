import { generateProduct, generateProducts } from './productsGenerator'
/**
 * Unit tests for the generateProduct function
 */
describe('generateProduct', () => {
  /**
   * Tests that the function returns an object with all expected properties
   */
  test('returns an object with all expected properties', () => {
    const product = generateProduct()
    expect(product).toHaveProperty('id')
    expect(product).toHaveProperty('name')
    expect(product).toHaveProperty('price')
    expect(product).toHaveProperty('color')
    expect(product).toHaveProperty('category')
    expect(product).toHaveProperty('description')
    expect(product).toHaveProperty('image')
  })

  /**
   * Tests that the function returns an object with specified values
   */
  test('returns an object with specified values', () => {
    const name = 'Test Product'
    const price = 9.99
    const color = 'Red'
    const category = 'Test Category'
    const description = 'Test Description'
    const image = 'http://test-image.com'

    const product = generateProduct(
      name,
      price,
      color,
      category,
      description,
      image
    )

    expect(product.name).toEqual(name)
    expect(product.price).toEqual(price)
    expect(product.color).toEqual(color)
    expect(product.category).toEqual(category)
    expect(product.description).toEqual(description)
    expect(product.image).toEqual(image)
  })

  /**
   * Tests that the function returns an object with random values for null properties
   */
  test('returns an object with random values for null properties', () => {
    const product = generateProduct(null, null, null, null, null, null)

    expect(product.name).toBeDefined()
    expect(product.price).toBeDefined()
    expect(product.color).toBeDefined()
    expect(product.category).toBeDefined()
    expect(product.description).toBeDefined()
    expect(product.image).toBeDefined()
  })
})

describe('generateProducts', () => {
  it('should generate the specified number of products', () => {
    const numProducts = 5
    const products = generateProducts(numProducts)

    expect(products).toHaveLength(numProducts)
  })

  it('should generate an array of product objects', () => {
    const numProducts = 3
    const products = generateProducts(numProducts)

    expect(Array.isArray(products)).toBe(true)
    products.forEach(product => {
      expect(typeof product).toBe('object')
    })
  })

  it('should generate products with correct properties', () => {
    const numProducts = 2
    const products = generateProducts(numProducts)

    products.forEach(product => {
      expect(product).toHaveProperty('name')
      expect(typeof product.name).toBe('string')

      expect(product).toHaveProperty('price')
      expect(typeof product.price).toBe('number')

      expect(product).toHaveProperty('color')
      expect(typeof product.color).toBe('string')

      expect(product).toHaveProperty('category')
      expect(typeof product.category).toBe('string')

      expect(product).toHaveProperty('description')
      expect(typeof product.description).toBe('string')

      expect(product).toHaveProperty('image')
      expect(typeof product.image).toBe('string')

      expect(product).toHaveProperty('id')
      expect(typeof product.id).toBe('string')

      expect(product).toHaveProperty('stock')
      expect(typeof product.stock).toBe('number')
    })
  })
})
