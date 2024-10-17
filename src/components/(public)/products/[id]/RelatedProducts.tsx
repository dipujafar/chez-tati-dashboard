import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import { products } from "@/utils/products";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold lg:text-4xl">Related Products</h1>

      {/* display products */}
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products?.slice(0, 4).map((product, inx) => (
          <Link href={`/products/${inx}`} key={inx}>
            <Card className="group">
              <CardContent className="relative">
                <Image
                  src={product?.image}
                  alt="product_image"
                  width={1950}
                  height={1000}
                  className="h-full w-full duration-1000 group-hover:scale-95"
                ></Image>
                <div>
                  <div className="group absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-[#FDEEE9] duration-1000 hover:bg-primary-black hover:text-primary-white group-hover:right-4">
                    <Heart className="cursor-pointer" />
                  </div>
                  {product?.discount && (
                    <div className="group absolute left-2 top-2 flex items-center justify-center rounded-md bg-primary-color px-2 py-1 text-primary-white duration-1000 group-hover:left-4">
                      Sale {product?.discount}% off
                    </div>
                  )}
                  {inx === 3 && (
                    <div className="group absolute left-2 top-2 flex items-center justify-center rounded-md bg-primary-black px-2 py-1 text-primary-white">
                      Out of Stock
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between duration-1000 group-hover:px-8">
                <div>
                  <div>
                    <p className="font-bold text-primary-color">
                      {product?.name}
                    </p>
                    <p>${product?.price}</p>
                    <Rating rating={product?.rating} className="w-20"></Rating>
                  </div>
                </div>
                <div className="rounded-full bg-light-gray p-3">
                  <ShoppingCart size={20} />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
