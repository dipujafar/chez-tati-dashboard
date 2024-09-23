import Image from "next/image";
import userIcon from "@/assets/Icons/userIcon.png";
import earingIcon from "@/assets/Icons/EarningIcon.png";

const StatisticBar = () => {
  return (
    <div className="h-32 flex  font-roboto text-primaryWhite">
      <div className="w-1/2 h-full mr-4 bg-primaryOrange rounded-xl flex gap-6 px-12 items-center ">
        <div className="bg-parimaryWhite p-4 rounded-full">
          <Image src={userIcon} alt="user" width={40} height={40} />
        </div>
        <div className="flex flex-col ">
          <p className="text-3xl ">Total User</p>
          <h4 className="text-3xl font-bold ">518</h4>
        </div>
      </div>
      <div className="w-1/2 h-full ml-4 bg-primaryOrange rounded-xl flex gap-6  px-12 items-center  ">
      <div className="bg-parimaryWhite p-4 rounded-full">
          <Image src={earingIcon} alt="user" width={40} height={40} />
        </div>
        <div className="flex flex-col ">
          <p className="text-3xl">Total Earning</p>
          <h4 className="text-3xl font-bold ">$78464</h4>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default StatisticBar;
