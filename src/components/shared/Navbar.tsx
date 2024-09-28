"use client";
import Image from "next/image";
import Container from "./Container";
import logo from "@/assets/images/logo.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
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
    label: "All Category",
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
          <Link href={"/user/profile"}>
            <User></User>
          </Link>
        </div>
      </nav>

      {/* small device view */}
    </Container>
  );
};

export default Navbar;
