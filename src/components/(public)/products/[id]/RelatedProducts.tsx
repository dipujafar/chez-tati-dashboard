import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import { products } from "@/utils/products";
import Link from "next/link";
import { useGetProductsQuery } from "@/redux/api/productsApi";
import ProductCardSkeleton from "@/utils/ProductCardSkeleton";
import { TProduct } from "@/types/types";

const RelatedProducts = ({
  categoryId,
  productsId,
}: {
  categoryId: string;
  productsId: string;
}) => {
  const { data: productsData, isLoading: isProductsDataLoading } =
    useGetProductsQuery({ category: categoryId });

  console.log(productsId);

  const relatedProductsData = productsData?.data?.allProducts?.filter(
    (products: TProduct) => products._id !== productsId,
  );

  return (
    <div>
      <h1 className="text-2xl font-bold lg:text-4xl">Related Products</h1>

      {isProductsDataLoading ? (
        <div className="mt-10 grid grid-cols-1 justify-between gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index}></ProductCardSkeleton>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 justify-between gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {relatedProductsData
            ?.slice(0, 4)
            .map((product: TProduct, inx: number) => (
              <Card key={inx} className="group">
                <CardContent className="relative">
                  <Link href={`/products/${product?._id}`}>
                    <Image
                      src={product?.images[0]?.url}
                      alt="product_image"
                      width={1950}
                      height={1000}
                      className="h-[250px] w-full duration-1000 group-hover:scale-95"
                    ></Image>
                  </Link>
                  <div>
                    <div className="group absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-[#FDEEE9] duration-1000 hover:bg-primary-black hover:text-primary-white group-hover:right-4">
                      <Heart className="cursor-pointer" />
                    </div>

                    {Number(product?.stock) === 0 && (
                      <div className="group absolute left-2 top-0 flex items-center justify-center rounded-md bg-primary-black px-2 py-1 text-primary-white duration-1000 group-hover:left-4">
                        Out of Stock
                      </div>
                    )}

                    {Number(product?.stock) > 0 && product?.discount > 0 && (
                      <div className="group absolute left-2 top-0 flex items-center justify-center rounded-md bg-primary-color px-2 py-1 text-primary-white duration-1000 group-hover:left-4">
                        Sale{" "}
                        {(
                          (Number(product?.discount) / Number(product?.price)) *
                          100
                        ).toFixed(0)}
                        % off
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between duration-1000 group-hover:px-8">
                  <Link href={`/products/${product?._id}`}>
                    <div>
                      <div>
                        <p className="font-bold text-primary-color">
                          {product?.name}
                        </p>
                        <p>${product?.price}</p>
                        <Rating
                          rating={product?.averageRating || 0}
                          className="w-20"
                        ></Rating>
                      </div>
                    </div>
                  </Link>
                  <div className="rounded-full bg-light-gray p-3">
                    <ShoppingCart size={20} />
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
