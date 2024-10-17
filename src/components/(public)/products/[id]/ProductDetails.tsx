"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import detailsImage from "@/assets/images/productDetails.png";
import Slider from "react-slick";
import Image from "next/image";
import { MutableRefObject, useState } from "react";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./productDetails.css";
import { TProduct } from "@/types/types";

const productDetailsImages = [
  {
    image: "/freezer.png",
  },
  {
    image: "/freezer1.jpg",
  },
  {
    image: "/freezer3.jpg",
  },
  {
    image: "/freezer.png",
  },
];

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ProductDetailsContainer = ({
  productData,
}: {
  productData: TProduct;
}) => {
  const [quantity, setQuantity] = useState(0);
  console.log(productData);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );
  ` 
`;

  return (
    <div className="flex flex-col items-center gap-7 lg:flex-row">
      {/* products images */}
      <div className="flex-1">
        {/* products details
        <div className="flex flex-col-reverse items-center gap-3 md:flex-row">
          {/* <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="mt-10 md:mt-0"
          >
            <CarouselContent className="w- -mt-1 max-h-[390px]">
              {productDetailsImage.map((data, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <Image
                      src={data?.image}
                      alt="product_image"
                      width={950}
                      height={700}
                      className="h-28 w-24"
                    ></Image>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-top-10 shadow-xl" />
            <CarouselNext className="-bottom-10 shadow-xl" />
          </Carousel> */}
        {/* <Image
            src={detailsImage}
            alt="product_image"
            className="h-full md:w-3/4"
          ></Image> */}
        {/* </div>  */}
        {/* _________________________ Product Images Carousel __________________ */}

        <div className="flex-1">
          <div
            ref={sliderRef}
            className="keen-slider mx-auto max-h-[600px] w-full max-w-[300px]"
          >
            {productDetailsImages.map((image, idx) => (
              <Image
                key={idx}
                src={image?.image}
                alt="product_image"
                width={900}
                height={700}
                className="keen-slider__slide h-[150px] w-[200px] pl-0 md:h-[320px] md:w-[250px]"
              ></Image>
            ))}
          </div>
        </div>

        {/* thumbnail  images  */}

        <div
          ref={thumbnailRef}
          className="thumbnail thumbnail-image mx-auto flex w-[250px] overflow-x-auto md:w-[500px] lg:w-full"
        >
          {productDetailsImages.map((image, idx) => (
            <div key={idx} className="w-fit">
              <Image
                src={image?.image}
                alt="product_image"
                width={950}
                height={700}
                className={`keen-slider__slide slider-image translate-0 ml-2 h-[80px] border`}
              ></Image>
            </div>
          ))}
        </div>
      </div>

      {/* product description */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold text-primary-black lg:text-5xl">
            {productData?.name}
          </h1>
          {productData?.stock > 0 ? (
            <p className="rounded bg-primary-pink px-2 py-1 text-primary-red">
              In Stock
            </p>
          ) : (
            <p className="rounded bg-black px-2 py-1 text-primary-red">
              Out of Stock
            </p>
          )}
        </div>
        {/* rating and review */}
        <div className="mt-5 flex gap-2">
          <Rating rating={5} className="w-28"></Rating>
          <p className="text-primary-gray">
            <span>4</span> Review
          </p>
        </div>
        {/* price and discound*/}
        <div className="mb-6 mt-2 flex items-center gap-x-3">
          <p className="text-xl text-primary-color">
            <s className="text-primary-gray">$48.00</s>
            <span className="ml-2 font-medium">$17.28</span>
          </p>
          <p className="rou rounded-full bg-primary-pink px-2 py-1 text-primary-red">
            64% Off
          </p>
        </div>

        <hr />

        {/* category and description */}
        <div className="mt-7">
          <p className="font-medium text-primary-black">
            Cateroy:{" "}
            <span className="font-normal text-primary-gray">Freeze</span>
          </p>
          <p className="mt-6 max-w-3xl text-primary-gray">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
          </p>

          {/* checkout */}
          <div className="mt-7 flex items-center gap-x-3">
            {/* quantity */}
            <div className="flex items-center gap-x-3 rounded-full border-2 px-2 py-1">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className={`bg-light-gray ${
                  quantity === 0 && "text-primary-gray"
                } flex size-10 items-center justify-center rounded-full shadow-lg`}
                disabled={quantity === 0}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className={`flex size-10 items-center justify-center rounded-full bg-light-gray shadow-lg`}
              >
                +
              </button>
            </div>

            {/* checkout btn */}
            {quantity === 0 ? (
              <Button disabled className="w-full rounded-full bg-primary-color">
                Checkout
              </Button>
            ) : (
              <Link href={"/checkout"} className="flex-1">
                <Button className="w-full rounded-full bg-primary-color">
                  Checkout
                </Button>
              </Link>
            )}

            <div className="rounded-full bg-light-gray p-3">
              <ShoppingCart size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
