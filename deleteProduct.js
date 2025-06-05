
const SITE = "https://fakestoreapi.com/products"

function deleteProduct(argv3) {
    const productId = argv3.split("/")[1];

    fetch(`${SITE}/${productId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (!response.ok) throw new Error("Error al eliminar el producto");
            return response.json();
        })
        .then(data => console.log("Producto eliminado:", data))
        .catch(err => console.error("Error:", err.message));
}


export {deleteProduct};