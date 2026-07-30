import BannerProduct from '../../components/BannerProduct/BannerProduct'
import ProductCard from '../../components/ProductCard/ProductCard'

const productData = {
    name: 'Syltherine',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discountPercentage: 30,
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop', // O la ruta de tu imagen local
    altText: 'Stylish cafe chair',
};

function Product() {
    return (
        <div>
            <BannerProduct />
            <div className="w-3xs">
                <ProductCard product={productData} />
            </div>
        </div>
    )
}

export default Product