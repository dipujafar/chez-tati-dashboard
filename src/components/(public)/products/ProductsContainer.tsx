"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Heart,
  Search,
  ShoppingCart,
} from "lucide-react";
import { RangeSlider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { products } from "@/utils/products";
import Image from "next/image";
import { Rating } from "@/components/ui/rating";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

const categories = [
  {
    label: "All Category",
    value: "all-category",
    quantity: 100,
  },
  {
    label: "Laptop",
    value: "laptop",
    quantity: 25,
  },
  {
    label: "Washing Machine",
    value: "washing-machine",
    quantity: 12,
  },
  {
    label: "Iron",
    value: "iron",
    quantity: 40,
  },
  {
    label: "Freeze",
    value: "freeze",
    quantity: 15,
  },
  {
    label: "Tv",
    value: "tv",
    quantity: 30,
  },
  {
    label: "Air Conditioner",
    value: "air-conditioner",
    quantity: 8,
  },
  {
    label: "Headphone",
    value: "headphone",
    quantity: 50,
  },
  {
    label: "Mobile Phones",
    value: "mobile-phones",
    quantity: 60,
  },
  {
    label: "Refrigerator",
    value: "refrigerator",
    quantity: 20,
  },
  {
    label: "Smart Watches",
    value: "smart-watches",
    quantity: 35,
  },
  {
    label: "Gaming Consoles",
    value: "gaming-consoles",
    quantity: 22,
  },
  {
    label: "Microwave Ovens",
    value: "microwave-ovens",
    quantity: 18,
  },
];

const sortData = ["Letast"];

const ProductsContainer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7; // Number of visible categories at a time
  const maxIndex = categories.length - visibleCount;
  const [pricecValue, setPriceValue] = useState([100, 700]);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartIndex(Number(event.target.value));
  };

  const handlePriceSliderChange = (value: number[]) => {
    setPriceValue(value);
    console.log(value[0]);
  };

  const handleSortChange = (value: string) => {
    console.log(value);
  };

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - visibleCount));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + visibleCount));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-20 2xl:grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1 space-y-8">
          {/* Search bar */}
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="Search"
              className="w-full rounded-full pl-9"
            />
            <Search className="absolute left-3 font-light" size={20} />
          </div>

          {/* Category List */}
          <div className="relative">
            <div className="flex-1">
              <h1 className="mb-3 text-2xl font-bold">All Categories</h1>
              {/* Category radio list */}
              <RadioGroup className="mx-2 space-y-3">
                {categories
                  .slice(startIndex, startIndex + visibleCount)
                  .map((category, inx) => (
                    <div className="flex items-center space-x-2" key={inx}>
                      {/* Dot with custom color */}
                      <div className="h-3 w-3 rounded-full" />
                      <RadioGroupItem
                        value={category.value}
                        id={`r${inx}`}
                        className=""
                      />
                      <Label htmlFor={`r${inx}`}>{category.label}</Label>
                    </div>
                  ))}
              </RadioGroup>
            </div>

            {/* Arrow controls for navigation */}
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handlePrevClick}
                disabled={startIndex === 0}
                className="absolute right-0 top-0 rounded-full bg-gray-200 p-2 shadow-md duration-200 hover:bg-gray-300 disabled:opacity-50"
              >
                <ChevronUp size={24} />
              </button>
              <button
                onClick={handleNextClick}
                disabled={startIndex >= maxIndex}
                className="absolute bottom-0 right-0 rounded-full bg-gray-200 p-2 shadow-md duration-200 hover:bg-gray-300 disabled:opacity-50"
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </div>

          {/* price */}
          <div>
            <h1 className="mb-3 text-2xl font-bold">Price</h1>
            {/* price filter slider */}
            <RangeSlider
              value={pricecValue}
              onValueChange={handlePriceSliderChange}
              max={1000}
              step={1}
              className="w-[60%]"
            />
            <p className="mt-4">
              Price : ${pricecValue[0]} - ${pricecValue[1]}
            </p>
          </div>
        </div>

        {/* Products section */}
        <div className="2xl:col-span-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex w-[280px] items-center gap-2">
              <h1 className="">Sort by: </h1>
              <Select onValueChange={handleSortChange}>
                <SelectTrigger className="w-[120px] gap-2">
                  <SelectValue placeholder="Latest" />
                </SelectTrigger>
                <SelectContent className="w-fit">
                  <SelectGroup>
                    {sortData?.map((data, inx) => (
                      <SelectItem key={inx} value={data} className="capitalize">
                        {data}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <h1 className="text-lg font-medium">
              <span className="font-bold">52</span> Results Found
            </h1>
          </div>

          {/* display produts */}
          <div className="mt-5 grid grid-cols-1 justify-between gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {products?.slice(0, 12).map((product, inx) => (
              <Link href={`/products/${inx}`} key={inx}>
                <Card className="w-[350px]">
                  <CardContent className="relative">
                    <Image
                      src={product?.image}
                      alt="product_image"
                      width={1950}
                      height={1000}
                      className="h-full w-full"
                    ></Image>
                    <div>
                      <div className="group absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-[#FDEEE9] hover:bg-primary-black hover:text-primary-white">
                        <Heart className="cursor-pointer" />
                      </div>
                      {product?.discount && (
                        <div className="group absolute left-2 top-2 flex items-center justify-center rounded-md bg-primary-color px-2 py-1 text-primary-white">
                          Sale {product?.discount}% off
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div>
                      <div>
                        <p className="font-bold text-primary-color">
                          {product?.name}
                        </p>
                        <p>${product?.price}</p>
                        <Rating
                          rating={product?.rating}
                          className="w-20"
                        ></Rating>
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
      </div>

      {/* pagination */}
      <div className="mt-10">
        <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default ProductsContainer;
