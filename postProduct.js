
const SITE = "https://fakestoreapi.com/products"

function postProduct(title, priceStr, category) {
    //intento pasar el string del price a un numero
    const price = parseFloat(priceStr); 

    //chequeo si falta un argumento o no se convirtio bien el precio
    if (!title || isNaN(price) || !category) {
        console.error("Faltan argumentos o el precio no es válido. Uso: POST products <title> <price> <category>");
        process.exit(1);
    }

    const newProduct = { title, price, category };

    fetch(SITE, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(data => console.log("Producto creado:", data))
        .catch(err => console.error("Error al crear el producto:", err.message));
}

export {postProduct};
