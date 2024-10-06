"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// import "./ProductImgSlider.css";

export default function ProductImgSlider({
  images,
}: {
  images: { image: string }[];
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [lightboxImageIndex, setlightboxImageIndex] = useState(-1); // Hide lightbox if index -1

  // Define image slides for lightbox
  const imageSlides = images?.map((image) => {
    return { ...image, src: image.image };
  });

  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <Image
            src={images[i]?.image}
            alt={`product image ${currentImgIndex}`}
            className="mx-auto block w-1/2 p-4"
            layout="fill"
            objectFit="contain"
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "product-img-slider",
    autoplay: true,
    autoplaySpeed: 3500,
    // speed: 1000,
    easing: "easeInOut",
  };

  return (
    <>
      <Slider {...settings}>
        {images?.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentImgIndex(index)}
            className="product-img-container bg-foundation-white-hover h-[590px] w-full rounded"
          >
            <Image
              src={img.image}
              alt={`product image ${currentImgIndex}`}
              width={500}
              height={500}
              className="block cursor-pointer"
              onClick={() => setlightboxImageIndex(index)}
              title="Click to expand"
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
