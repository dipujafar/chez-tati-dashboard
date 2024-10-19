"use client";
import { TProduct } from "@/types/types";
import ProductCardSkeleton from "@/utils/ProductCardSkeleton";

import { motion } from "framer-motion";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  productData: TProduct[];
  loading: boolean;
};

const TrendingProductsCard = ({ productData, loading }: TProps) => {
  const containerVarient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, easeIn: [0.17, 0.67, 0.83, 0.67] },
    },
  };

  const itemVarient = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duratioin: 0.5, easeIn: [0.17, 0.67, 0.83, 0.67] },
    },
  };

  return loading ? (
    <div className="mt-7 grid grid-cols-1 gap-x-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <ProductCardSkeleton key={index}></ProductCardSkeleton>
      ))}
    </div>
  ) : (
    <motion.div
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      className="mt-7 grid grid-cols-1 gap-x-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {productData?.slice(0, 9)?.map((product, inx) => (
        <motion.div
          variants={itemVarient}
          className="group relative space-y-1"
          key={product?.name}
        >
          <Link href={`/products/${product?._id}`}>
            <Image
              src={product?.images[0]?.url}
              alt="product_image"
              width={1950}
              height={1000}
              className="h-[256px] w-full rounded-xl duration-1000 group-hover:scale-95"
            ></Image>
          </Link>
          <Link href={`/products/${product?._id}`}>
            <div>
              <h1 className="font-medium text-primary-black duration-1000 group-hover:pl-4">
                {product?.name}
              </h1>
              <p className="font-medium text-primary-gray duration-1000 group-hover:pl-4">
                ${product?.price}
              </p>
              <div className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-primary-black text-primary-white duration-1000 hover:bg-primary-pink hover:text-primary-black group-hover:right-4">
                <Heart className="cursor-pointer" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrendingProductsCard;
