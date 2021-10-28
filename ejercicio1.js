
//Obtener el precio (price) promedio de todos los productos
const meanPrice = productList => {
  const prices = productList.map(product => product.price);
  return prices.reduce( (total, price, index, array) => {
    total += price;
    if(index === array.length-1) { 
      return total/array.length;
    }else{ 
      return total;
    }
  })
}

//Obtener el producto más puntuado (Mayor de rating.count)
const highestRating = productList => {
  const higher = productList.reduce((prev, current) => {
    return (prev.rating.rate > current.rating.rate) ? prev : current
  }) 
  return higher
}

//Obtener todos los productos de una categoría
const getCategory = (productList,category) => {
  return productList.filter(product => product.category === category)
}

//Obtener un producto específico por el id
const getProductById = (productList,id) => {
  return productList.find(product => product.id == id)
}

//Buscar todos los productos que contengan una palabra específica en title, category or description
const findProduct = (productList,searchWord) => {
  return productList.filter(product => {
    productText = `${product.title} ${product.description} ${product.category}`
    return productText.includes(searchWord) 
  })
}

//Buscar todos los productos con rating.rate menor a 3
const lowestRating = productList => {
  return productList.filter(product => product.rating.rate < 3) 
}

//Obtener el rating.rate promedio de cada categoría de productos
const meanRate = productList => {
  const rates = productList.map(product => product.rating.rate)
  return rates.reduce( (total, rate, index, array) => {
    total += rate;
    if(index === array.length-1) { 
      return total/array.length;
    }else{ 
      return total;
    }
  })
}

module.exports = { meanPrice, highestRating, getProductById, getCategory, lowestRating, meanRate, findProduct}

