import { ShoppingCart } from "lucide-react";
import { addToCart, removeProduct } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { Error_Modal, Success_model } from "./models";
import AlreadyInCart from "./AlreadyInCart";
import { error } from "console";
import { Button } from "@/components/ui/button";
import { text } from "stream/consumers";

const AddToCartButton = ({
  cartData,
  variant,
}: {
  cartData: TProduct;
  variant?: string;
}) => {
  console.log(cartData);
  const dispatch = useAppDispatch();
  const { status: alreadyInCart } = AlreadyInCart(cartData._id);

  const handleAddToCart = () => {
    if (alreadyInCart) {
      Error_Modal({
        title: "Already in cart",
        text: "Please checkout from your cart",
      });
      return;
    }

    dispatch(addToCart(cartData as any));
    Success_model({ title: "Added to cart" });
  };
  return variant === "button" ? (
    <Button
      onClick={handleAddToCart}
      className="w-full rounded-full bg-primary-color"
    >
      Buy Now
    </Button>
  ) : (
    <div onClick={handleAddToCart} className="rounded-full bg-light-gray p-3">
      <ShoppingCart size={20} />
    </div>
  );
};

export default AddToCartButton;
