"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"; // Importing arrow icons
import Image from "next/image";

const categories = [
  "SHORTS",
  "HAT",
  "JACKETS",
  "SHOES",
  "T-SHIRT",
  "LAPTOP",
  "FREEZE",
  "TV",
];

const products = [
  {
    name: "Skateboard Shoe",
    price: 25.99,
    image: "/trening1.png",
    category: "SHORTS",
  },
  {
    name: "Winter Wool Hat",
    price: 15.49,
    image: "/trening2.png",
    category: "HAT",
  },
  {
    name: "Leather Jacket",
    price: 89.99,
    image: "/trening3.png",
    category: "JACKETS",
  },
  {
    name: "Running Shoes",
    price: 49.99,
    image: "/trening4.png",
    category: "SHOES",
  },
  {
    name: "Graphic T-Shirt",
    price: 19.99,
    image: "/trening5.png",
    category: "T-SHIRT",
  },
  {
    name: "Gaming Laptop",
    price: 1099.99,
    image: "/trening6.png",
    category: "LAPTOP",
  },
  {
    name: "Double Door Freeze",
    price: 799.99,
    image: "/trening7.png",
    category: "FREEZE",
  },
  {
    name: "4K Ultra HD TV",
    price: 499.99,
    image: "/trening8.png",
    category: "TV",
  },
  {
    name: "Sports Shorts",
    price: 29.99,
    image: "/trening9.png",
    category: "SHORTS",
  },
];

const TrendingProducts = () => {
  const [selected, setSelected] = useState("SHORTS");
  const [startIndex, setStartIndex] = useState(0); // Track the start index of the visible categories
  const visibleCategoriesCount = 5; // Number of categories to show at a time

  // Handle next click
  const handleNext = () => {
    if (startIndex + visibleCategoriesCount < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Handle previous click
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div>
      <hr />
      {/* title and category list */}
      <div className="mt-8 flex flex-col items-center justify-between gap-y-3 lg:flex-row">
        <h1 className="text-4xl font-bold">Trending</h1>

        <div className="flex items-center space-x-3">
          {/* Arrow to go back */}
          <ChevronLeft
            onClick={handlePrev}
            className={`cursor-pointer ${
              startIndex === 0
                ? "cursor-not-allowed text-gray-400"
                : "text-black"
            }`}
            size={24}
          />
          {/* categoris list */}
          <div className="flex flex-wrap gap-y-2">
            {categories
              ?.slice(startIndex, startIndex + visibleCategoriesCount)
              .map((category, inx) => (
                <Button
                  onClick={() => setSelected(category)}
                  key={inx}
                  variant="outline"
                  className={`rounded-full ${
                    selected === category && "bg-primary-red text-primary-white"
                  } hover:bg-primary-color hover:text-primary-white`}
                >
                  {category}
                </Button>
              ))}
          </div>
          {/* Arrow to go forward */}
          <ChevronRight
            onClick={handleNext}
            className={`cursor-pointer ${
              startIndex + visibleCategoriesCount >= categories.length
                ? "cursor-not-allowed text-gray-400"
                : "du text-black"
            }`}
            size={24}
          />
        </div>
      </div>

      {/* tranding products */}
      <div className="mt-7 grid grid-cols-1 gap-x-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <div className="relative space-y-1" key={product?.name}>
            <Image
              src={product?.image}
              alt="product_image"
              width={1950}
              height={1000}
              className="max-h-[286px] w-full rounded-xl"
            ></Image>
            <h1 className="font-medium text-primary-black">{product?.name}</h1>
            <p className="font-medium text-primary-gray">${product?.price}</p>
            <div className="group absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-primary-black">
              <Heart color="#fff" className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
