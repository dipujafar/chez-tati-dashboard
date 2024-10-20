"use client";

import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { useSelector } from "react-redux";

export default function AlreadyInCart(productId: string) {
  const { items: cart } = useAppSelector((state) => state.cart);

  const alreadyInCart = cart?.find((product: any) => product._id === productId);

  // @ts-ignore
  if (alreadyInCart?._id) return { status: true, product: alreadyInCart };
  return { status: false };
}
