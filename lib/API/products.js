export async function getProducts(page = 1, limit = 12) {
  try {
    const skip = (page - 1) * limit;
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, {
      next: { revalidate: 3600 } 
    });

    if (!res.ok) {
      throw new Error('Error al obtener los productos');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}