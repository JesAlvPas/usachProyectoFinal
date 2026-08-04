export async function getProducts(page = 1, limit = 12) {
  try {
    const skip = (page - 1) * limit;
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error('Error al obtener productos');
    }

    const data = await res.json();
    // Devuelve el objeto completo con { products, total, skip, limit }
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return { products: [], total: 0 };
  }
}