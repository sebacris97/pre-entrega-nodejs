
const SITE = "https://fakestoreapi.com/products"

function getProducts(argv3) {
    if (argv3 === "products") {
        fetch(SITE)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error("Error:", err.message));
    } else if (argv3.startsWith("products/")) {
	//me guardo el id
        const productId = endpoint.split("/")[1];

        fetch(`${SITE}/${productId}`)
            .then(response => {
                if (!response.ok) throw new Error("Producto no encontrado");
                return response.json();
            })
            .then(data => console.log(data))
            .catch(err => console.error("Error:", err.message));
    }
}

export {getProducts};