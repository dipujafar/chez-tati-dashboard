"use client";
import Image from "next/image";
import Container from "./Container";
import logo from "@/assets/images/logo.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Heart, Search, ShoppingCart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";
import Link from "next/link";

const categories = [
  {
    label: "All Categoty",
    value: "all-categoty",
  },
  {
    label: "Laptop",
    value: "laptop",
  },
  {
    label: "Washing Machine",
    value: "washing-machine",
  },
  {
    label: "Iron",
    value: "iron",
  },
  {
    label: "Freeze",
    value: "freeze",
  },
  {
    label: "Tv",
    value: "tv",
  },
  {
    label: "Air Conditioner",
    value: "air-conditioner",
  },
  {
    label: "Headphone",
    value: "headphone",
  },
];

const Navbar = () => {
  const router = useRouter(); // Use useRouter hook

  // Function to handle category selection
  const handleCategoryChange = () => {
    // Programmatically navigate to the category route
    router.push(`/products`);
  };

  return (
    <Container>
      <nav className="flex items-center justify-between gap-x-36 py-7">
        {/* logo image */}
        <div>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={1200}
              height={1200}
              className="w-auto"
            />
          </Link>
        </div>

        {/* nav link and search bar */}
        <div className="flex flex-1 items-center justify-center gap-10">
          {/* search */}
          <div className="relative flex w-1/2 items-center">
            <Input
              type="text"
              placeholder="Search"
              className="rounded-full pl-10"
            />
            <Search
              className="absolute left-4 border-none font-light"
              size={20}
            />
            <Button
              type="submit"
              className="absolute right-0 rounded-l-none rounded-r-full bg-primary-color"
            >
              Search
            </Button>
          </div>

          {/* navLinks */}
          <nav>
            <ul className="flex items-center gap-8 text-light-black">
              <li>
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger className="min-w-fit gap-2 border-none">
                    <SelectValue placeholder="All Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories?.map((category, inx) => (
                        <SelectItem key={inx} value={category?.value}>
                          {category?.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* nav icons */}
        <div className="flex items-center gap-3">
          <Link href={"/favorite-products"}>
            <Heart />
          </Link>
          <Link href={"/shopping-cart"}>
            <ShoppingCart />
          </Link>
          <Link href={"/sign-in"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M8.61015 10.0755C8.61015 6.67695 11.3652 3.92188 14.7638 3.92188C18.1623 3.92188 20.9174 6.67695 20.9174 10.0755C20.9174 13.4741 18.1623 16.2291 14.7638 16.2291C11.3652 16.2291 8.61015 13.4741 8.61015 10.0755ZM14.7638 13.7677C16.8029 13.7677 18.456 12.1146 18.456 10.0755C18.456 8.03637 16.8029 6.38333 14.7638 6.38333C12.7246 6.38333 11.0716 8.03637 11.0716 10.0755C11.0716 12.1146 12.7246 13.7677 14.7638 13.7677Z"
                fill="#232323"
              />
              <path
                d="M7.80174 20.3436C5.95529 22.1901 4.91797 24.6944 4.91797 27.3057H7.37942C7.37942 25.3472 8.15742 23.469 9.54225 22.0842C10.9271 20.6993 12.8053 19.9213 14.7638 19.9213C16.7222 19.9213 18.6005 20.6993 19.9853 22.0842C21.3702 23.469 22.1481 25.3472 22.1481 27.3057H24.6096C24.6096 24.6944 23.5723 22.1901 21.7258 20.3436C19.8794 18.4972 17.3751 17.4599 14.7638 17.4599C12.1525 17.4599 9.64819 18.4972 7.80174 20.3436Z"
                fill="#232323"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
