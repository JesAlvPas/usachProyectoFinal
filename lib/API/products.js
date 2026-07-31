
export async function getProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) {
            throw new Error('Error al obtener los productos');
        }

        const data = await res.json();
        return data.products; // DummyJSON retorna los productos dentro de la propiedad "products"
    } catch (error) {
        return console.error("Fetch Error:", error);
    }
}