"use client";
import { TProduct } from "@/types/types";
import { trendingProducts } from "@/utils/trendingProducts";
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

  return (
    <motion.div
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      className="mt-7 grid grid-cols-1 gap-x-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {productData?.map((product, inx) => (
        <Link href="/products" key={inx}>
          <motion.div
            variants={itemVarient}
            className="group relative space-y-1"
            key={product?.name}
          >
            <Image
              src={product?.images[0]?.url}
              alt="product_image"
              width={1950}
              height={1000}
              className="max-h-[286px] w-full rounded-xl duration-1000 group-hover:scale-95"
            ></Image>
            <h1 className="font-medium text-primary-black duration-1000 group-hover:pl-4">
              {product?.name}
            </h1>
            <p className="font-medium text-primary-gray duration-1000 group-hover:pl-4">
              ${product?.price}
            </p>
            <div
              onClick={(e) => e.stopPropagation()}
              className="group absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-primary-black text-primary-white duration-1000 hover:bg-primary-pink hover:text-primary-black"
            >
              <Heart className="cursor-pointer" />
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default TrendingProductsCard;
