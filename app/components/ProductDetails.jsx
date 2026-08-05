"use client";

import { useState, useContext } from "react";
import Image from "next/image";
// import { Minus, Plus } from "lucide-react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails({ product }) {
  const { title, price, description, images, sku, category, tags } = product;
  const { addToCart } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail || product.images?.[0],
      },
      quantity
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition cursor-pointer ${selectedImage === index ? "border-neutral-800" : "border-transparent"
                  }`}
              >
                <Image
                  src={img}
                  alt={`${title} miniatura ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="flex-1 bg-orange-50 rounded-2xl overflow-hidden">
            <Image
              src={images[selectedImage]}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-neutral-900">{title}</h1>
          <p className="mt-2 text-neutral-800 text-lg font-medium">
            $ {price?.toLocaleString("id-ID")}
          </p>

          <p className="mt-4 text-neutral-500 leading-relaxed">{description}</p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-neutral-300 rounded-full">
              <button
                onClick={handleDecrease}
                className="w-9 h-9 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 rounded-full transition text-lg font-medium select-none cursor-pointer"
                aria-label="Disminuir cantidad"
              >
                −
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="w-9 h-9 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 rounded-full transition text-lg font-medium select-none cursor-pointer"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-8 py-3 rounded-full border border-neutral-800 font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition cursor-pointer"
            >
              Add To Cart
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-neutral-400 w-24">SKU</span>
              <span className="text-neutral-700">: {sku}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-400 w-24">Category</span>
              <span className="text-neutral-700">: {category}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-400 w-24">Tags</span>
              <span className="text-neutral-700">: {tags?.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}