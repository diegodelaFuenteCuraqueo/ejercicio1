const ejercicio = require("./ejercicio1")
const products = require("./sampleData.json")

//for testing purposes only...
test = {
  meanPrice : ejercicio.meanPrice(products),
  bestRate : ejercicio.highestRating(products).title,
  productsByCategory : ejercicio.getCategory(products,"lacteos"),
  foundById : ejercicio.getProductById(products,1).title,
  foundByString: ejercicio.findProduct(products,"ch"),
  lowRatedProducts : ejercicio.lowestRating(products),
  meanRate : ejercicio.meanRate(products),
  meanCategoryRates : ejercicio.meanCategoryRates(products),
  sortedProducts : ejercicio.sortByRate(products)
}

console.log(test)



