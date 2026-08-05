import Image from 'next/image';
import Link from 'next/link';

function BannerProduct() {
    return (
        <div>
            <section className="relative w-full h-75 flex flex-col items-center justify-center overflow-hidden">

                <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600"
                    alt="Shop Banner Background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-medium text-black mb-2 tracking-wide">
                        Shop
                    </h1>

                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
                        <Link href="/" className="font-semibold text-black hover:underline">
                            Home
                        </Link>
                        <span className="text-neutral-600">›</span>
                        <span className="text-neutral-600">Shop</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BannerProduct