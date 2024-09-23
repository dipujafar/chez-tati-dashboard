import { Button } from "antd";
import React from "react";
import { GoBell } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import userImag from "@/assets/image/userImage.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type TNavbarType = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ collapsed, setCollapsed }: TNavbarType) => {
  const pathname = usePathname();
  const navbarTitle = pathname.split("/")[1];
  return (
    <nav className="flex items-center justify-between py-4 pr-[68px]">
      <div className="flex items-center gap-x-2">
        <Button
          type="text"
          icon={collapsed ? <RxCross2 size={32} color="#000" /> : <IoMenu size={32} color="#000" />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <h1 className="capitalize text-2xl font-bold ">
          {navbarTitle.length > 1
            ? navbarTitle.replaceAll("/", " ").replaceAll("-", " ")
            : "dashboard"}
        </h1>
      </div>
      <div className="flex items-center gap-x-6">
        <Link href={"/notifications"}>
          <div
            role="button"
            className="relative aspect-square size-12 rounded-full bg-primaryBlack flex-item-center"
          >
            <GoBell size={20} color="#EB2926" />
            <span className="absolute top-1.5 right-1.5 size-[18px] bg-primaryWhite text-warning rounded-full text-sm flex-item-center">
              3
            </span>
          </div>
        </Link>
        <Link href={"/profile"}>
          <div className="flex items-center gap-x-3">
            <Image
              src={userImag}
              alt="admin profile"
              width={48}
              height={48}
              className="rounded-full"
            />
            <h4 className="text-base font-medium ">Akash</h4>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
