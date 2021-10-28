const ejercicio = require("./ejercicio1")
const products = require("./sampleData.json")

//for testing purposes only...
test = {
  meanPrice : ejercicio.meanPrice(products),
  bestRated : ejercicio.highestRating(products),
  categoryProducts : ejercicio.getCategory(products,"lacteos"),
  product : ejercicio.getProductById(products,1),
  foundProduct: ejercicio.findProduct(products,"ch"),
  lowRatedProducts : ejercicio.lowestRating(products),
  meanRate : ejercicio.meanRate(products)
}

console.log(test)



