"use client"
import { Button } from "@/components/ui/button";
import { InputRating } from "@/components/ui/inputrating";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progressbar";
import { Rating } from "@/components/ui/rating";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

const handleRatingChange = (newRating: number) => {
  console.log("User selected rating:", newRating);
};

const ReviewContainer = () => {
  return (
    <div className="space-y-8 lg:space-y-20">
      <div className="flex flex-col gap-5 md:flex-row lg:gap-x-40">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-medium">4.8</h1>
            <Star fill="#000" size={40}></Star>
          </div>
          <div className="mt-4 w-fit">
            <p>1,64,002 Ratings</p>
            <p className="text-center">&</p>
            <p>5,922 Reviews</p>
          </div>
        </div>

        {/* previous ratings */}
        <div className="flex-1">
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">5</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={80}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">4</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={50}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">3</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={60}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">2</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={30}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">1</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={10}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
        </div>
      </div>

      {/* input rating */}
      <div>
        <InputRating onRatingChange={handleRatingChange} className="w-96"></InputRating>
      </div>

      {/* Feedback message */}
      <div className="space-y-2">
        <Label  className="text-2xl text-primary-black">Please share your opinion about the product</Label>
        <Textarea placeholder="your review" className="bg-light-gray" rows={7}></Textarea>
      </div>


      {/* submit button */}
      <Button className="w-full">Send Review</Button>
    </div>
  );
};

export default ReviewContainer;
