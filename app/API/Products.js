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
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return { products: [], total: 0 };
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}