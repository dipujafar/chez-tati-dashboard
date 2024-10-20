import { ShoppingCart } from "lucide-react";
import { addToCart, removeProduct } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { Error_Modal, Success_model } from "./models";
import AlreadyInCart from "./AlreadyInCart";
import { error } from "console";

const AddToCartButton = ({ cartData }: { cartData: TProduct }) => {
  const dispatch = useAppDispatch();
  const { status: alreadyInCart } = AlreadyInCart(cartData._id);

  const handleAddToCart = () => {
    if (alreadyInCart) {
      Error_Modal({ title: "Already in cart" });
      return;
    }

    dispatch(addToCart(cartData as any));
    Success_model({ title: "Added to wishlist" });
  };
  return (
    <div onClick={handleAddToCart} className="rounded-full bg-light-gray p-3">
      <ShoppingCart size={20} />
    </div>
  );
};

export default AddToCartButton;
