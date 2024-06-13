const productList = () => {
    return fetch('http://localhost:3000/products')
        .then(response => response.json())
        .catch(error => console.log(error));
};

export const serviceProducts = {
    productList,
};