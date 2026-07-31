
import BannerProduct from '../../components/BannerProduct/BannerProduct'
import ProductCard from '../../components/ProductCard/ProductCard'
import Pagination from '../../components/Pagination/Pagination'
import { getProducts } from '@/lib/API/products'


// const productData = {
//     name: 'Syltherine',
//     subtitle: 'Stylish cafe chair',
//     price: 2500000,
//     originalPrice: 3500000,
//     discountPercentage: 30,
//     imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop', // O la ruta de tu imagen local
//     altText: 'Stylish cafe chair',
// };

async function Product() {
    const products = await getProducts();
    console.log(products);
    return (
        <div>
            <BannerProduct />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* <ProductCard product={productData} /> */}
                    {products.map(product => <ProductCard name={product.title} imageUrl={product.images[0]} />)}
                  


                </div>
                <Pagination
                    currentPage={1}
                    totalPages={6}
                    onPageChange={1}
                />
            </div>
        </div>
    )
}

export default Product