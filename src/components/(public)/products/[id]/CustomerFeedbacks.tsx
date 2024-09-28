import { Rating } from "@/components/ui/rating";
import Image from "next/image";

const feedbackData = [
  {
    name: "John Doe",
    image: "/user1.png",
    rating: 4.5,
    feedback: "Great product! Highly recommend it.",
    time: "2 hours ago",
  },
  {
    name: "Jane Smith",
    image: "/user2.png",
    rating: 4.0,
    feedback:
      "TKeep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.",
    time: "1 day ago",
  },
  {
    name: "Michael Johnson",

    rating: 5.0,
    feedback: "Absolutely amazing! Exceeded my expectations.",
    time: "3 days ago",
  },
  {
    name: "Emily Davis",
    image: "/user3.png",
    rating: 3.5,
    feedback: "Decent experience, but some features were lacking.",
    time: "5 days ago",
  },
  {
    name: "David Lee",
    image: "/use2.png",
    rating: 4.8,
    feedback: "Fantastic! Will definitely use this again.",
    time: "1 week ago",
  },
];
const CustomerFeedbacks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold lg:text-4xl">Customer Feedback</h1>
      <div className="lg:w-3/4">
        {/* feedbacks */}
        {feedbackData?.slice(0, 4)?.map((data, index) => (
          <div className="mt-6" key={index}>
            <div>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {data?.image ? (
                    <Image
                      src={data?.image}
                      alt="userImage"
                      width={950}
                      height={700}
                      className="size-14"
                    ></Image>
                  ) : (
                    <Image
                      src="/nonUser.png"
                      alt="userImage"
                      width={950}
                      height={700}
                      className="size-14"
                    ></Image>
                  )}

                  <div>
                    <h1 className="text-lg font-medium text-primary-black">
                      {data?.name}
                    </h1>
                    <Rating rating={data?.rating} className="w-24"></Rating>
                  </div>
                </div>
                <p className="text-primary-gray">{data?.time}</p>
              </div>
              <p className="mt-4 max-w-5xl text-primary-gray">
                {data?.feedback}
              </p>
            </div>
            {index === 3 ? "" : <hr className="mt-5" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedbacks;
