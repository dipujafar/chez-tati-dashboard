import img2 from "@/assets/images/home_bg_2.png";
import img3 from "@/assets/images/home_bg_3.png";
import img4 from "@/assets/images/hero-image-5.png";
import img5 from "@/assets/images/hero-image-6.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const carouselData = [
  {
    image: "/hero-image-1.png",
    title: "Best Home Appliance Products",
    description: "100+ Collections for your outfit inspirations in this summer",
  },
  {
    image: "/hero-image-1.png",
    title: "Best Home Appliance Products",
    description: "100+ Collections for your outfit inspirations in this summer",
  },
  {
    image: "/hero-image-1.png",
    title: "Best Home Appliance Products",
    description: "100+ Collections for your outfit inspirations in this summer",
  },
];

const HeroSection = () => {
  return (
    <div className="mt-6">
      <div>
        <div className="grid grid-cols-1 gap-3 overflow-hidden xl:max-h-[650px] xl:grid-cols-3">
          <div className="col-span-2 rounded-md">
            <Carousel className="w-full pl-4 pr-2 lg:max-h-[650px]">
              <CarouselContent className="relative">
                {carouselData?.map((data, index) => (
                  <CarouselItem key={index}>
                    <Card className="rounded-3xl">
                      <CardContent className="relative px-0 pb-0">
                        <Image
                          src={data?.image}
                          width={1950}
                          height={1700}
                          alt="banner_image"
                          className="h-full min-h-[350px] rounded-3xl xl:h-[650px]"
                        />
                        <div className="absolute left-8 top-8 z-20 text-primary-white md:left-12 md:top-16 lg:top-20">
                          <h1 className="max-w-md text-3xl font-bold md:text-5xl lg:text-6xl">
                            {data?.title.split(" ")[0]}
                          </h1>
                          <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
                            {`${data?.title.split(" ")[1]} ${
                              data?.title?.split(" ")[2]
                            }`}
                          </h1>
                          <h1 className="max-w-md text-3xl font-bold md:text-5xl lg:text-6xl">
                            {data?.title?.split(" ")[3]}
                          </h1>
                          <p className="md:text-md mt-2 px-2 text-sm lg:mt-4 lg:text-lg">
                            {data?.description}
                          </p>
                          <Link href="/products">
                            <Button className="mx-auto mt-4 rounded-full lg:mt-8 lg:w-1/2">
                              View Products
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-1 bg-primary-color text-primary-white" />
              <CarouselNext className="absolute right-1 bg-primary-color text-primary-white" />
            </Carousel>
          </div>
          <div>
            <Link href="/products">
              <div className="relative">
                <Image
                  src={img2}
                  alt="banner_image"
                  className="max-h-[319px] w-full rounded-3xl"
                />
                <h1 className="absolute left-8 top-8 z-20 text-3xl font-semibold text-primary-white md:text-4xl">
                  Indoor <br /> Active
                </h1>
              </div>
            </Link>
            <Link href="/products">
              <div className="relative mt-3">
                <Image
                  src={img3}
                  alt="banner_image"
                  className="max-h-[319px] w-full rounded-3xl"
                />
                <h1 className="absolute left-8 top-8 z-20 text-3xl font-semibold md:text-4xl">
                  Casual <br /> Comfort
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Casual Inspirations section */}
      <div className="mt-3 grid grid-cols-1 items-center gap-3 lg:grid-cols-3">
        <div className="lg:ml-9">
          <h1 className="mt-3 text-3xl font-bold text-primary-black xl:mb-5 xl:text-5xl">
            Casual <br />
            Inspirations
          </h1>
          <p className="max-w-md text-secondary-gray">
            Our favorite combinations for casual outfit that can inspire you to
            apply on your daily activity.
          </p>
          <Button
            variant="outline"
            className="mx-auto mt-3 rounded-full xl:mt-10 xl:w-3/4"
          >
            BROWSE INSPIRATIONS
          </Button>
        </div>
        <Link href="/products">
          <div className="relative">
            <Image
              src={img4}
              alt="banner_image"
              className="max-h-[319px] w-full rounded-3xl brightness-75"
            />
            <h1 className="absolute bottom-8 left-8 z-20 text-3xl font-semibold text-primary-white md:text-4xl">
              Say it <br />
              with Shirt
            </h1>
            <div className="-gray absolute bottom-4 right-4 z-20 flex size-14 items-center justify-center rounded-full border border-primary-white text-3xl font-semibold text-primary-white md:text-4xl xl:bottom-8 xl:right-8">
              <MoveUpRight size={30} />
            </div>
          </div>
        </Link>

        <Link href="/products">
          <div className="relative">
            <Image
              src={img5}
              alt="banner_image"
              className="max-h-[319px] w-full rounded-3xl"
            />
            <h1 className="absolute bottom-8 left-8 z-20 text-3xl font-semibold text-primary-white md:text-4xl">
              Electronics <br />
              Gadgets
            </h1>
            <div className="-gray absolute bottom-4 right-4 z-20 flex size-14 items-center justify-center rounded-full border border-primary-white text-3xl font-semibold text-primary-white md:text-4xl xl:bottom-8 xl:right-8">
              <MoveUpRight size={30} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
