// // Import necessary modules
// const { Products } = require('./products')
// const { generateProducts } = require('./productsGenerator')
// const { v4: uuidv4 } = require('uuid')

// // Create a mock array of products
// const mockProducts = [
//   {
//     id: '111',
//     name: 'Product 1',
//     price: 19.99,
//     color: 'red',
//     category: 'electronics',
//     description: 'This is a product.',
//     image: 'https://www.example.com/product1.jpg',
//     votes: 0
//   },
//   {
//     id: '222',
//     name: 'Product 2',
//     price: 29.99,
//     color: 'blue',
//     category: 'furniture',
//     description: 'This is another product.',
//     image: 'https://www.example.com/product2.jpg',
//     votes: 0
//   }
// ]

// // Unit tests for Products class
// describe('Products class', () => {
//   let products

//   beforeEach(() => {
//     // Reset products instance before each test
//     products = new Products(mockProducts)
//   })

//   it('should initialize with an empty array if no products are passed in', () => {
//     const productsNoParams = new Products()
//     expect(productsNoParams.getProducts()).toEqual([])
//   })

//   it('should generate random data and add it to the existing products', () => {
//     const generatedProducts = generateProducts(5)
//     const initialLength = products.getProducts().length
//     products.generateRandomData(5)
//     const newLength = products.getProducts().length
//     expect(newLength).toBe(initialLength + generatedProducts.length)
//   })

//   it('should return all products in the collection', () => {
//     const result = products.getProducts()
//     expect(result).toEqual(mockProducts)
//   })

//   it('should return the correct product by ID', () => {
//     const id = '222'
//     const expected = mockProducts.find(p => p.id === id)
//     const result = products.getProductById(id)
//     expect(result).toEqual(expected)
//   })

//   it('should add a new product to the collection', () => {
//     const initialLength = products.getProducts().length
//     const newProduct = {
//       id: uuidv4(),
//       name: 'New Product',
//       price: 49.99,
//       color: 'green',
//       category: 'outdoors',
//       description: 'This is a new product.',
//       image: 'https://www.example.com/newproduct.jpg',
//       votes: 0
//     }
//     const expected = [...mockProducts, newProduct]
//     products.addProduct(
//       newProduct.name,
//       newProduct.price,
//       newProduct.color,
//       newProduct.category,
//       newProduct.description,
//       newProduct.image
//     )
//     const result = products.getProducts()
//     expect(result.length).toBe(initialLength + 1)
//     expect(result).toEqual(expected)
//   })

//   it('should remove a product from the collection by ID', () => {
//     const id = '111'
//     const expected = mockProducts.filter(p => p.id !== id)
//     products.removeProduct(id)
//     const result = products.getProducts()
//     expect(result.length).toBe(expected.length)
//     expect(result).toEqual(expected)
//   })

//   it('should rename a product in the collection by ID', () => {
//     const id = '111'
//     const newName = 'New Product Name'
//     const expected = mockProducts.map(p => {
//       if (p.id === id) {
//         p.name = newName
//       }
//       return p
//     })
//     products.renameProduct(id, newName)
//     const result = products.getProducts()
//     expect(result).toEqual(expected)
//   })
// })
