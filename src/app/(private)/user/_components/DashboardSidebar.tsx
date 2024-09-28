"use client";

import "../User.css";
import { cn } from "@/lib/utils";
import {
  Heart,
  History,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={25} />,
    href: "/user/profile",
  },
  {
    key: "orderHistory",
    label: "Order History",
    icon: <History size={25} />,
    href: "/user/order-history",
  },
  {
    key: "wishlist",
    label: "Wishlist",
    icon: <Heart size={25} />,
    href: "/favorite-products",
  },
  {
    key: "shopping-cart",
    label: "Shopping Cart",
    icon: <ShoppingCart size={25} />,
    href: "/shopping-cart",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <Settings size={25} />,
    href: "/user/account-settings",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="dashboard-card w-[20%] bg-white py-5">
      <h4 className="mb-5 px-5 text-xl font-bold">Navigation</h4>

      <div className="space-y-2">
        {SIDEBAR_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={cn(
              "flex items-center gap-x-3 px-5 py-4 text-lg text-gray-scale-600 transition-all duration-300 ease-in-out",
              pathname === link.href &&
                "border-l-4 border-l-[#EA5326] bg-[#FDEEE9] text-black",
            )}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}

        <button
          type="button"
          className="flex items-center gap-x-3 px-5 py-4 text-lg text-gray-scale-600"
        >
          <LogOut size={25} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
