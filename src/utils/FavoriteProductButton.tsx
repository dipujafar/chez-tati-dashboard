import { cn } from "@/lib/utils";
import { selectUser } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Heart } from "lucide-react";
import { Error_Modal, Success_model } from "./models";
import {
  useAddWishListMutation,
  useGetWishListQuery,
} from "@/redux/api/wishListApi";
import { TError } from "@/types/types";
import Loading from "./Loading";

const FavoriteProductButton = ({
  className,
  productId,
}: {
  className?: string;
  productId: string;
}) => {
  const user = useAppSelector(selectUser)?.userId;
  const [addWishList, { isLoading }] = useAddWishListMutation();
  const { data: wishListProduct } = useGetWishListQuery(undefined);

  console.log(wishListProduct);

  const handleAddWishList = async (id: string) => {
    if (!user) {
      Error_Modal({
        title: "Please login",
        text: "Only logged in users can add to wish list",
      });
      return;
    }

    try {
      await addWishList({ product: id }).unwrap();
      Success_model({ title: "Added to wish list" });
    } catch (error: TError | any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <div
      onClick={() => handleAddWishList(productId)}
      className={cn(
        "flex size-10 items-center justify-center rounded-full bg-primary-black text-primary-white duration-1000 hover:bg-primary-pink hover:text-primary-black group-hover:right-4",
        className,
      )}
    >
      {isLoading ? <Loading></Loading> : <Heart className="cursor-pointer" />}
    </div>
  );
};

export default FavoriteProductButton;
