// lib/API/products.js
export async function getProducts(limit = 4) {
  try {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error('Error al obtener productos');
    }

    const data = await res.json();
    return data.products; // Devuelve el arreglo de productos
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}