"use client";
import { Button, message, Popconfirm, PopconfirmProps } from "antd";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import AddBannerModal from "./AddBannerModal";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

const banners = [
  {
    image: "/banner_image1.png",
  },
  {
    image: "/banner_image2.png",
  },
  {
    image: "/banner_image3.png",
  },
];


const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Successfully Delete this banner");
  };

const AddBannerContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <Button
          className="w-full bg-primaryOrange text-primaryWhite border-none font-semibold !py-6 uppercase"
          icon={<CiCirclePlus size={20} color="#fff" />}
          onClick={() => setOpen(true)}
        >
          Add New Banner
        </Button>

        <div className="mt-6">
          <h1 className="text-2xl text-primaryWhite font-bold">Banner List</h1>
          {/* Banner List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
            {banners?.map((banner, inx) => (
              <div key={inx} className="relative">
                <Image
                  key={inx}
                  src={banner?.image}
                  alt="banner_image"
                  width={950}
                  height={700}
                  className=" w-full max-h-[150px] rounded-md"
                ></Image>
                <div className="py-2 px-3 bg-primaryBlack absolute top-1 right-1 rounded-lg cursor-pointer">

                <Popconfirm
            title="Delete this banner"
            description="Are you sure to delete this banner?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <FaRegTrashAlt color="#EB2926" size={16} />
          </Popconfirm>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddBannerModal open={open} setOpen={setOpen}></AddBannerModal>
    </>
  );
};

export default AddBannerContainer;
