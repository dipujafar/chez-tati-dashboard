"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
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
import { useGetCategoriesQuery } from "@/redux/api/categoriesApi";
import { TCategory, TProduct } from "@/types/types";
import Loading from "@/utils/Loading";
import { useGetProductsQuery } from "@/redux/api/productsApi";
import ProductCardSkeleton from "@/utils/ProductCardSkeleton";
import Empty from "@/utils/Empty";

const sortData = ["Latest"];

const ProductsContainer = () => {
  const [startIndex, setStartIndex] = useState(0);

  const { data: categoriesData, isLoading: isCategoriesDataLoading } =
    useGetCategoriesQuery(undefined);
  const visibleCategories = 7;
  const maxIndex = categoriesData?.data?.data?.length - visibleCategories;
  const [priceValue, setPriceValue] = useState<number[]>([1, 200]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // products data
  const { data: productsData, isLoading: isProductDataLoading } =
    useGetProductsQuery(undefined);
  console.log(productsData?.data?.allProducts);

  const handlePriceSliderChange = (value: number[]) => {
    setPriceValue(value);
  };

  const handleSortChange = (value: string) => {
    console.log(value);
  };

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - visibleCategories));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + visibleCategories));
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
              {isCategoriesDataLoading ? (
                <Loading className="mx-auto h-[50px] w-full" />
              ) : (
                /* Category radio list */
                <RadioGroup className="mx-2 space-y-3">
                  {categoriesData?.data?.data
                    ?.slice(startIndex, startIndex + visibleCategories)
                    .map((category: TCategory, inx: number) => (
                      <div className="flex items-center space-x-2" key={inx}>
                        {/* Dot with custom color */}
                        <div className="h-3 w-3 rounded-full" />
                        <RadioGroupItem
                          onClick={() => setSelectedCategory(category?.name)}
                          value={category?.name}
                          id={`r${inx}`}
                          className=""
                        />

                        <Label>{category?.name}</Label>
                      </div>
                    ))}
                </RadioGroup>
              )}
            </div>

            {/* Arrow controls for navigation */}
            {categoriesData?.data?.data?.length > visibleCategories && (
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
            )}
          </div>

          {/* price */}
          <div>
            <h1 className="mb-3 text-2xl font-bold">Price</h1>
            {/* price filter slider */}
            <RangeSlider
              value={priceValue}
              onValueChange={handlePriceSliderChange}
              max={1000}
              step={1}
              className="w-[60%]"
            />
            <p className="mt-4">
              Price : ${priceValue[0]} - ${priceValue[1]}
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
              <span className="font-bold">
                {productsData?.data?.allProducts?.length}
              </span>{" "}
              Results Found
            </h1>
          </div>

          {/* display produts */}
          {isProductDataLoading ? (
            <div className="mt-7 grid grid-cols-1 gap-x-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <ProductCardSkeleton key={index}></ProductCardSkeleton>
              ))}
            </div>
          ) : productsData?.data?.allProducts ? (
            <div className="mt-5 grid grid-cols-1 justify-between gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
              {productsData?.data?.allProducts.map(
                (product: TProduct, inx: number) => (
                  <Link href={`/products/${product?._id}`} key={inx}>
                    <Card className="group">
                      <CardContent className="relative">
                        <Image
                          src={product?.images[0]?.url}
                          alt="product_image"
                          width={1950}
                          height={1000}
                          className="h-[250px] w-full rounded-xl duration-1000 group-hover:scale-95"
                        ></Image>
                        <div>
                          <div className="group absolute right-2 top-0 flex size-10 items-center justify-center rounded-full bg-[#FDEEE9] duration-1000 hover:bg-primary-black hover:text-primary-white group-hover:right-4">
                            <Heart className="cursor-pointer" />
                          </div>

                          {product?.discount > 0 && (
                            <div className="group absolute left-2 top-0 flex items-center justify-center rounded-md bg-primary-color px-2 py-1 text-primary-white duration-1000 group-hover:left-4">
                              Sale {product?.discount}% off
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
                            <Rating
                              rating={product?.averageRating || 0}
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
                ),
              )}
            </div>
          ) : (
            <Empty></Empty>
          )}
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
