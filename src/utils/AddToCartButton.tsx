import { ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { Error_Modal, Success_model } from "./models";
import AlreadyInCart from "./AlreadyInCart";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const AddToCartButton = ({
  cartData,
  variant,
}: {
  cartData: TProduct;
  variant?: string;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { status: alreadyInCart } = AlreadyInCart(cartData?._id);

  const handleAddToCart = () => {
    if (Number(cartData?.stock) <= 0) {
      Error_Modal({
        title: "Out of stock yet",
        text: "Please choose another product",
      });
      return;
    }

    if (alreadyInCart && variant === "button") {
      router.push("/shopping-cart");
      return;
    }

    if (alreadyInCart) {
      Error_Modal({
        title: "Already in cart",
        text: "Please checkout from your cart",
      });
      return;
    }

    dispatch(addToCart(cartData as any));
    if (variant === "button") {
      router.push("/shopping-cart");
    }
    Success_model({ title: "Added to cart" });
  };
  return variant === "button" ? (
    <Button
      onClick={handleAddToCart}
      className="w-full rounded-full bg-primary-color"
    >
      Buy Now <ShoppingBag className="ml-2" size={20} />
    </Button>
  ) : (
    <div
      onClick={handleAddToCart}
      className="rounded-full bg-light-gray p-3 duration-200 hover:bg-primary-color hover:text-primary-white"
    >
      <ShoppingCart size={20} />
    </div>
  );
};

export default AddToCartButton;
