"use client";
import ProductCard from "@/components/(dashboardLayout)/products/ProductCard";
import { TProduct } from "@/types/type";
import { Button, Segmented } from "antd";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa6";
import AddCetagoryModal from "./AddCetagoryModal";
import Link from "next/link";

const ProductsContainer = () => {
  const [open, setOpen] = useState(false);
  const [allCategories] = useState([
    "ALL",
    "AC",
    "TV",
    "WATCH",
    "COSMETICS",
    "Laptop",
    "Computer",
    "Eletronics",
  ]);

  const [visibleCategories, setVisibleCategories] = useState([
    "ALL",
    "AC",
    "TV",
    "WATCH",
    "COSMETICS",
    "Laptop",
  ]);

  const handleRightClick = () => {
    setVisibleCategories((prev) => {
      // Remove the first category and append the next one from allCategories
      const nextIndex =
        (allCategories.indexOf(prev[prev.length - 1]) + 1) %
        allCategories.length;
      return [...prev.slice(1), allCategories[nextIndex]];
    });
  };

  const handleLeftClick = () => {
    setVisibleCategories((prev) => {
      // Remove the last category and prepend the previous one from allCategories
      const prevIndex =
        (allCategories.indexOf(prev[0]) - 1 + allCategories.length) %
        allCategories.length;
      return [allCategories[prevIndex], ...prev.slice(0, -1)];
    });
  };

  const products: TProduct[] = Array?.from({length: 6}).map((products,inx)=>(
    {
      _id: `${inx + 1}`,
      name: "Freezer",
      category: "Electronics",
      price: 59.99,
      shortDescription:
        "Lorem ipsum is placeholder text commonly used in the graphic.",
      description:
        "These wireless Bluetooth headphones feature advanced noise-canceling technology and up to 30 hours of battery life. Ideal for long trips and home office use.",
      image: "https://example.com/images/headphones.jpg",
      salesCount: 1269,
      quantity: 1269,
      createdAt: "2024-09-10T12:34:56.000Z",
      updatedAt: "2024-09-10T12:34:56.000Z",
    }
  ))
   
    
  
  

  return (
    <>
      <div className="space-y-6">
        <div>
          <Button
            className="w-full bg-primaryOrange text-primaryWhite border-none font-semibold !py-6 uppercase"
            icon={<CiCirclePlus size={20} color="#fff" />}
            onClick={() => setOpen(true)}
          >
            Add New Category
          </Button>
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold w-full text-primaryWhite">
              All Products
            </h1>
            <Link href={"/products/addProduct"}>
              <Button
                size="large"
                className=" min-w-48  bg-primaryWhite text-primaryBlack border-none font-medium"
                icon={<CiCirclePlus size={20} color="#000" className="font-medium" />}
              >
                Add Product
              </Button>
            </Link>
          </div>
          <div className="w-full flex items-center gap-x-6">
            <Button
              onClick={handleLeftClick}
              className="bg-primaryRed text-primaryWhite !py-5 border-none"
            >
              <FaChevronLeft size={14} />
            </Button>
            <Segmented options={visibleCategories} block className="w-full" />
            <Button
              onClick={handleRightClick}
              className="bg-primaryRed text-primaryWhite border-none !py-5"
            >
              <FaChevronLeft size={14} className="rotate-180" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <AddCetagoryModal open={open} setOpen={setOpen}></AddCetagoryModal>
    </>
  );
};

export default ProductsContainer;
