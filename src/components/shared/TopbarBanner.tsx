/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname } from "next/navigation";
import Container from "./Container";
import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
import "./TopbarBanner.css";

interface TopbarBannerProps {
  pageName?: string;
}

const TopbarBanner = ({ pageName }: TopbarBannerProps) => {
  const pathName = usePathname();

  return (
    <div className={`w-full h-[120px] bg-topbar-image flex items-center`}>
      <div>
        <Container>
          <div className="h-full flex gap-3 items-center">
            <Link href={"/"}>
              <House size={20} className="text-primary-white" />
            </Link>
            <ChevronRight size={20} className="text-primary-white" />
            <p className="text-white font-bold capitalize">
              {pageName || pathName
                ? pathName
                    .split("/")[1]
                    ?.replaceAll("/", " ")
                    .replaceAll("-", " ")
                : " "}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopbarBanner;
