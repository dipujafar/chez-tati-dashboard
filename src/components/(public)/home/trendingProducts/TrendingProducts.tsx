"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TrendingProductsCard from "./TrendingProductsCard";

const categories = ["New Arrival", "Discount", "Popular"];

const TrendingProducts = () => {
  const [selected, setSelected] = useState("Popular");
  const [startIndex, setStartIndex] = useState(0); // Track the start index of the visible categories
  const visibleCategoriesCount = 5; // Number of categories to show at a time

  return (
    <div>
      <hr />
      {/* title and category list */}
      <div className="mt-8 flex flex-col items-center justify-between gap-y-3 lg:flex-row">
        <h1 className="text-4xl font-bold">Trending</h1>

        <div className="flex items-center">
          {/* categoris list */}
          <div className="flex flex-wrap gap-x-2">
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
        </div>
      </div>

      {/* tranding products */}
      <TrendingProductsCard></TrendingProductsCard>
    </div>
  );
};

export default TrendingProducts;
