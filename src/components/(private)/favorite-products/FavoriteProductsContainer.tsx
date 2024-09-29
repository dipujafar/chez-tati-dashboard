import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { products } from "@/utils/products";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FavoriteProductsContainer = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold md:text-4xl">Favorite</h1>
      {/* display produts */}
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products?.slice(0, 16).map((product, inx) => (
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
                  <div className="group absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-[#FDEEE9] text-primary-white duration-1000 group-hover:right-4">
                    <Heart className="cursor-pointer" fill="#EA5326" />
                  </div>
                  {product?.discount && (
                    <div className="group absolute left-2 top-2 flex items-center justify-center rounded-md bg-primary-color px-2 py-1 text-primary-white duration-1000 group-hover:left-4">
                      Sale {product?.discount}% off
                    </div>
                  )}
                  {inx === 3 || inx === 5 || inx === 9 ? (
                    <div className="group absolute left-2 top-2 flex items-center justify-center rounded-md bg-primary-black px-2 py-1 text-primary-white duration-1000 group-hover:left-4">
                      Out of Stock
                    </div>
                  ) : (
                    ""
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

export default FavoriteProductsContainer;
