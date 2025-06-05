import { argv } from "process";

//importo mis modulos cada uno con una funcion del enunciado
import { getProducts } from './getProducts.js';
import { postProduct } from './postProduct.js';
import { deleteProduct } from './deleteProduct.js';

//si se utiliza GET
if (argv[2] === "GET") {
    getProducts(argv[3]);
}

//si se utiliza POST
if (argv[2] === "POST") {
    postProduct(argv[4], argv[5], argv[6]);
}

//si se utiliza DELETE
if (argv[2] === "DELETE" && argv[3].startsWith("products/")) {
    deleteProduct(argv[3]);
}
