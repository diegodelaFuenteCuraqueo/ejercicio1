//1 Obtener el precio (price) promedio de todos los productos
const meanPrice = productList => {
  const prices = productList.map(product => product.price)
  return prices.reduce((total, price) => (total + price) / prices.length) 
}

//2 Obtener el producto más puntuado (Mayor de rating.count)
const highestRating = products => products.reduce((prev, current) => (prev.rating.count > current.rating.count) ? prev : current)

//3 Obtener todos los productos de una categoría
const getCategory = (products, category) =>  products.filter(product => product.category === category)

//4 Obtener un producto específico por el id
const getProductById = (products, id) => products.find(product => product.id == id)

//5 Buscar todos los productos que contengan una palabra específica en title, category or description
const findProduct = (products, searchWord) => {
  return products.filter(product => {
    productTexts = `${product.title} ${product.description} ${product.category}`
    return productTexts.includes(searchWord) 
  })
}

//6 Buscar todos los productos con rating.rate menor a 3
const lowestRating = products => products.filter(product => product.rating.rate < 3)

//7 Obtener el rating.rate promedio de cada categoría de productos
const meanRate = products => {
  const rates = products.map(product => product.rating.rate)
  return rates.reduce((total, rate) => (total + rate) / rates.length) 
}

//8 Ordenar por rate de manera descendente 
const sortByRate = products => products.sort((a, b) => b.rating.rate - a.rating.rate)

module.exports = { meanPrice, highestRating, getProductById, getCategory, lowestRating, meanRate, findProduct, sortByRate}

