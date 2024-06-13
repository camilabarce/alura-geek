import { serviceProducts } from "../services/products-service.js";

const productContainer = document.querySelector("[data-product]");

function createCard(name, price, img, id) {
    const card = document.createElement("div");
    card.classList.add(
        "w-2/5",
        "border",
        "border-gray-200",
        "rounded-lg",
        "shadow",
        "bg-gray-800",
        "border-slate-700",
        "hover:bg-gray-100/5",
        "flex",
        "flex-col",
        "justify-between"
    );

    card.innerHTML = `
    <div class="flex-1 flex items-center justify-center">
        <img class="p-8 rounded-t-lg" src="${img}" alt="${name}">
    </div>
    <div class="px-5 pb-5">
        <h5 class="text-lg font-semibold tracking-tight text-white pb-5">${name}</h5>
        <div class="flex items-center justify-between flex-wrap">
            <span class="text-2xl font-bold text-white">$${price}</span>
            <button class="text-white bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-id="${id}">Eliminar</button>
        </div>
    </div>
    `;

    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProducts = await serviceProducts.productList();
        console.log(listProducts);
        listProducts.forEach(product => {
            createCard(product.name, product.price, product.img, product.id);
        });
    } catch (error) {
        console.log(error);
    }
};

render();