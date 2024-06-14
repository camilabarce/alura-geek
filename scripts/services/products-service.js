const productList = () => {
  return fetch('http://localhost:3000/products')
    .then(response => response.json())
    .catch(error => console.log(error));
};

const createProduct = (name, price, img) => {
  return fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      price,
      img
    }),
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

const deleteProduct = (id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

export const serviceProducts = {
  productList,
  createProduct,
  deleteProduct
};