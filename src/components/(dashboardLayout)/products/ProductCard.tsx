import { FaArrowUp } from "react-icons/fa6";
import productImg from "@/assets/image/Freezer.png";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { TProduct } from "@/types/type";
import { Progress } from "antd";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div
      className={`p-4 border border-primaryWhite rounded-xl font-roboto space-y-4 relative text-primaryWhite`}
    >
      <div className="flex items-center gap-4 mt-5">
        <Image src={productImg} alt={product.name} width={84} height={84} />
        <div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p className="text-base"> ${product.price}</p>
          </div>
        </div>
      </div>

      {/* delete and esit btn */}
      <div className="mt-2 flex gap-1 absolute top-0 right-1">
        <div className="p-3 bg-red-500 rounded-full">
          <FiTrash2 color="#fff" size={16} />
        </div>
        <div className="p-3 bg-green-500 rounded-full">
          <FiEdit color="#fff" size={16} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Short Description</h3>
        <p className="text-gray-400">{product.shortDescription}</p>
      </div>
      <div className="border border-[#334A55]/30 p-3 rounded-md space-y-3">
        <div className="flex justify-between items-center font-semibold">
          <p>Sales </p>
          <p className="flex items-center gap-2">
            <FaArrowUp size={16} /> {product.salesCount}
          </p>
        </div>
        <div className="border-t border-gray-600"></div>
        <div className="flex justify-between items-center font-semibold">
          <p className="flex-1">Remaining Products</p>

          <div className=" flex-1 flex items-center justify-end gap-3">
            <Progress percent={50} size="small" style={{ width: "100px" }} />
            <p>{product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
